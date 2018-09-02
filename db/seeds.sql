USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES ("Bacon Cheddar Burger", false), ("Mushroom Swiss Burger", true), ("Veggie Burger", false),
("Chicken Sandwich", false), ("Double Cheese Burger", false), ("Spicy Chicken Sandwich", false);

SELECT * FROM burgers;