/* @ds-bundle: {"format":4,"namespace":"Fahrschulring","components":[{"name":"Button"},{"name":"SectionHeading"},{"name":"Badge"},{"name":"StatTile"},{"name":"ClassCard"},{"name":"FaqItem"},{"name":"StickyContactBar"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }

  function PhoneIcon(p) {
    return h("svg", { "aria-hidden": true, viewBox: "0 0 20 20", fill: "currentColor", className: cx("fr-icon", p && p.className) },
      h("path", { d: "M3.4 2.2a1.5 1.5 0 0 1 2 .12l1.9 1.9a1.5 1.5 0 0 1 .3 1.7l-.8 1.7a.5.5 0 0 0 .1.56l3 3a.5.5 0 0 0 .56.1l1.7-.8a1.5 1.5 0 0 1 1.7.3l1.9 1.9a1.5 1.5 0 0 1 .12 2c-.6.7-1.6 1.6-2.9 1.7-2 .2-5.3-.4-8.6-3.7C1.9 9.9 1.3 6.6 1.5 4.6c.1-1.3 1-2.3 1.7-2.9z" }));
  }
  function MailIcon(p) {
    return h("svg", { "aria-hidden": true, viewBox: "0 0 20 20", fill: "currentColor", className: cx("fr-icon", p && p.className) },
      h("path", { d: "M2.5 4.5A1.5 1.5 0 0 1 4 3h12a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 16 17H4a1.5 1.5 0 0 1-1.5-1.5v-11zM4 4.7v.5l6 4.2 6-4.2v-.5H4zm12 2.1-5.44 3.8a1 1 0 0 1-1.12 0L4 6.8v8.2h12V6.8z" }));
  }

  function Button(props) {
    var variant = props.variant || "primary";
    var pulse = props.pulse;
    var cls = cx("fr-btn", "fr-btn--" + variant, pulse && (variant === "dark" ? "fr-pulse-dark" : "fr-pulse"), props.className);
    var rest = {};
    for (var k in props) if (["variant", "pulse", "className", "children", "icon"].indexOf(k) < 0) rest[k] = props[k];
    rest.className = cls;
    rest.href = props.href || "#";
    return h("a", rest, props.icon === "phone" ? h(PhoneIcon, { className: "fr-ring" }) : null, props.children);
  }

  function SectionHeading(p) {
    return h("div", { className: cx("fr-heading", p.light && "fr-heading--light") },
      p.eyebrow ? h("span", { className: "fr-heading__eyebrow" }, p.eyebrow) : null,
      h("h2", { className: "fr-heading__title" }, p.title),
      p.description ? h("p", { className: "fr-heading__desc" }, p.description) : null);
  }

  function Badge(p) {
    return h("span", { className: "fr-badge" }, p.children);
  }

  function StatTile(p) {
    return h("div", { className: "fr-stat" },
      h("dt", { className: "fr-stat__value" }, String(p.value) + (p.suffix || "")),
      h("dd", { className: "fr-stat__label" }, p.label));
  }

  function ClassCard(p) {
    return h("a", { className: "fr-class-card", href: p.href || "#" },
      h("h3", { className: "fr-class-card__title" }, p.title),
      p.classes ? h("p", { className: "fr-class-card__codes" }, p.classes) : null,
      h("p", { className: "fr-class-card__desc" }, p.description),
      h("span", { className: "fr-class-card__link" }, (p.cta || "Details ansehen") + " →"));
  }

  function FaqItem(p) {
    var s = React.useState(!!p.defaultOpen), open = s[0], setOpen = s[1];
    return h("div", { className: "fr-faq" },
      h("button", { type: "button", className: "fr-faq__q", "aria-expanded": open, onClick: function () { setOpen(!open); } },
        h("span", { className: "fr-faq__qtext" }, p.question),
        h("span", { "aria-hidden": true, className: cx("fr-faq__toggle", open && "is-open") }, "+")),
      h("div", { className: "fr-faq__panel", style: { gridTemplateRows: open ? "1fr" : "0fr" }, "aria-hidden": !open },
        h("div", { className: "fr-faq__inner" }, h("p", { className: "fr-faq__a" }, p.answer))));
  }

  function StickyContactBar(p) {
    var fixed = p.fixed !== false;
    return h("div", { className: cx("fr-sticky", fixed && "fr-sticky--fixed") },
      h("a", { href: "tel:" + (p.phoneHref || ""), className: "fr-sticky__call fr-pulse" }, h(PhoneIcon), p.callLabel || "Anrufen"),
      h("a", { href: "mailto:" + (p.email || ""), "aria-label": "E-Mail schreiben", className: "fr-sticky__mail" }, h(MailIcon)));
  }

  window.Fahrschulring = { Button: Button, SectionHeading: SectionHeading, Badge: Badge, StatTile: StatTile, ClassCard: ClassCard, FaqItem: FaqItem, StickyContactBar: StickyContactBar, PhoneIcon: PhoneIcon, MailIcon: MailIcon };
})();
