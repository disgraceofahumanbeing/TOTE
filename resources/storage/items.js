class Item {
  constructor(key, name, price, level, img, amount) {
    this.key = key,
      this.name = name,
      this.price = price,
      this.level = level,
      this.img = img,
      this.amount = amount
  }
}

class Equipment extends Item {
  constructor(key, name, price, level, img, amount, grade) {
    super(key, name, price, level, img, amount),
    this.grade = grade
  }
}

class Armor extends Equipment {
  constructor(key, name, price, level, img, amount, grade, slot, armor, speed) {
    super(key, name, price, level, img, amount, grade),
      this.slot = slot,
      this.armor = armor,
      this.speed = speed
  }
}

class Weapon extends Equipment {
  constructor(key, name, price, level, img, amount, grade, twohand, dmg, speed) {
    super(key, name, price, level, img, amount, grade),
      this.twohand = twohand,
      this.dmg = dmg,
      this.speed = speed
  }
}

function AddItem(key) {
  let copy;
  for(let item of items) {
    if(item.key == key) copy = JSON.parse(JSON.stringify(item));
  }
  return copy;
}

const items = [
  new Weapon("broken_iron_sword", "Broken Iron Sword", 10, 1, "broken_iron_sword_1", 1, 1, false, [{ type: "slash", value: 4 }, { type: "thrust", value: 1 }], -1),
  new Weapon("rusty_iron_sword", "Rusty Iron Sword", 25, 1, "rusty_iron_sword_1", 1, 1, false, [{type: "slash", value: 6}, {type: "thrust", value: 2}], -1),
  new Weapon("broken_iron_dagger", "Broken Iron Dagger", 8, 1, "rusty_iron_sword_1", 1, 1, false, [{type: "slash", value: 3}, {type: "thrust", value: 1}], 1),
  new Weapon("rusty_iron_bastard_sword", "Rusty Bastard Sword", 40, 1, "rusty_iron_sword_1", 1, 1, true, [{type: "slash", value: 8}, {type: "thrust", value: 3}], -2),
  new Armor("broken_iron_shield", "Broken Iron Shield", 10, 1, "broken_iron_shield_1", 1, 1, "shield", { slash: 52, blunt: 49, thrust: 50, fire: 26, frost: 17, wind: 61, water: 39, shock: 11, light: 15, dark: 14 }, -1),
  new Armor("leather_chest", "Leather Chestplate", 15, 1, "rusty_iron_ring_1", 1, 1, "chest", { slash: 5, blunt: 10, thrust: 3, fire: 2, frost: 5, wind: 5, water: 4, shock: 8, light: 5, dark: 5 }, 0),
  new Armor("leather_helmet", "Leather Helmet", 10, 1, "rusty_iron_ring_1", 1, 1, "helmet", { slash: 3, blunt: 6, thrust: 2, fire: 2, frost: 3, wind: 4, water: 2, shock: 3, light: 4, dark: 4 }, 0),
  new Armor("leather_gloves", "Leather Gloves", 10, 1, "rusty_iron_ring_1", 1, 1, "gloves", { slash: 2, blunt: 4, thrust: 1, fire: 2, frost: 2, wind: 3, water: 1, shock: 2, light: 3, dark: 2 }, 0),
  new Armor("leather_boots", "Leather Boots", 12, 1, "rusty_iron_ring_1", 1, 1, "feet", { slash: 4, blunt: 5, thrust: 2, fire: 2, frost: 4, wind: 4, water: 4, shock: 5, light: 5, dark: 5 }, 0)
];