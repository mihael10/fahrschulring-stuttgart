<?php
// Contact form endpoint for the static site on GitHub Pages.
// Upload this file to the Alfahosting webspace of fahrschulring.de (e.g. as
// https://www.fahrschulring.de/kontakt.php) and set that URL as the
// CONTACT_ENDPOINT repository variable on GitHub — see
// knowledge/deployment.md. It sends each request as a plain-text email via
// PHP's mail(), so it goes through Alfahosting's own mail server.

const RECIPIENT = 'info@fahrschulring.de';
// Sender must be an address on our own domain, or SPF/DKIM checks fail.
const SENDER = 'info@fahrschulring.de';
const ALLOWED_ORIGINS = [
    'https://mihael10.github.io',
    'https://fahrschulring.de',
    'https://www.fahrschulring.de',
];

header('Content-Type: application/json; charset=utf-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST');
    respond(204, []);
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['error' => 'Nur POST-Anfragen sind erlaubt.']);
}
if ($origin !== '' && !in_array($origin, ALLOWED_ORIGINS, true)) {
    respond(403, ['error' => 'Unbekannte Herkunft.']);
}

// Strips line breaks so no field can inject extra mail headers.
function field(string $key, int $max): string
{
    $value = trim((string) ($_POST[$key] ?? ''));
    return mb_substr($value, 0, $max);
}
function oneLine(string $value): string
{
    return trim(preg_replace('/[\r\n]+/', ' ', $value));
}

// Honeypot: real visitors never see or fill this field.
if (field('company', 200) !== '') {
    respond(200, ['ok' => true]);
}

$name = oneLine(field('name', 200));
$email = oneLine(field('email', 200));
$phone = oneLine(field('phone', 50));
$klasse = oneLine(field('wunschklasse', 100));
$message = field('message', 5000);

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['error' => 'Bitte gib deinen Namen und eine gültige E-Mail-Adresse an.']);
}

$subject = 'Kontaktanfrage über die Website: ' . $name;
$body = "Neue Anfrage über das Kontaktformular\n\n"
    . "Name: $name\n"
    . "E-Mail: $email\n"
    . 'Telefon: ' . ($phone !== '' ? $phone : '–') . "\n"
    . 'Gewünschte Klasse: ' . ($klasse !== '' ? $klasse : '–') . "\n\n"
    . "Nachricht:\n" . ($message !== '' ? $message : '–') . "\n";

$headers = implode("\r\n", [
    'From: Fahrschulring Website <' . SENDER . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

$sent = mail(
    RECIPIENT,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    $headers,
    '-f' . SENDER
);

if (!$sent) {
    respond(500, ['error' => 'Der Versand ist fehlgeschlagen.']);
}
respond(200, ['ok' => true]);
