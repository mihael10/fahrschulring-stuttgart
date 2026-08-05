export type Vehicle = {
  name: string;
  category: "Auto" | "Motorrad" | "LKW & Bus";
  tag?: string;
};

// Sourced from fahrschulring.de/pages/fahrzeuge.php.
export const fleet: Vehicle[] = [
  { name: "VW ID.3", category: "Auto", tag: "Elektro" },
  { name: "VW Polo", category: "Auto", tag: "Schaltung" },
  { name: "VW Golf", category: "Auto", tag: "Automatik" },
  { name: "VW T-Roc", category: "Auto", tag: "Schaltung" },
  { name: "BMW X1", category: "Auto" },
  { name: "BMW X2", category: "Auto" },
  { name: "Kia Niro", category: "Auto", tag: "Automatik" },
  { name: "MG4", category: "Auto", tag: "Elektro" },
  { name: "Tesla Model S", category: "Auto", tag: "Elektro" },
  { name: "Suzuki Roller", category: "Motorrad", tag: "AM" },
  { name: "Aprilia Tuono 125", category: "Motorrad", tag: "A1" },
  { name: "KTM Duke 125", category: "Motorrad", tag: "B196" },
  { name: "Honda CB 500", category: "Motorrad", tag: "A2" },
  { name: "Honda Hornet 750", category: "Motorrad", tag: "A" },
  { name: "BMW F900R", category: "Motorrad", tag: "A" },
  { name: "Mercedes Sprinter", category: "LKW & Bus", tag: "C1" },
  { name: "Mercedes Actros (Sattelzug)", category: "LKW & Bus", tag: "C/CE" },
  { name: "Setra Bus", category: "LKW & Bus", tag: "D" },
];
