drop database if exists drinks;
create database drinks;

use drinks;

create table wines
(
	wine_name varchar(50) unique,
    wine_type varchar(50),
    wine_characteristic json
);

create table characteristics
(
	characteristic_name varchar(50) unique
);

insert into wines values
('cabernet sauvignon', 'red', '{"flavor": "dry", "tannins": "medium", "body": "full", "acidity": "low"}'),

('merlot', 'red', '{"flavor": "dry", "tannins": "soft", "body": "medium", "acidity": "low"}'),

('syrah', 'red', '{"flavor": "dry", "tannins": "strong", "body": "full", "acidity": "medium"}'),

('pinot noir', 'red', '{"flavor": "dry", "tannins": "smooth", "body": "light", "acidity": "medium"}'),

('sangiovese', 'red', '{"flavor": "spicy", "tannins": "strong", "body": "full", "acidity": "medium"}'),

('red blend', 'red', '{"flavor": "dry", "tannins": "medium", "body": "full", "acidity": "low"}'),

('sauvignon blanc', 'white', '{"flavor": "dry", "tannins": "medium", "body": "full", "acidity": "medium"}'),

('chardonnay', 'white', '{"flavor": "dry", "tannins": "soft", "body": "medium", "acidity": "low"}'),

('pinot grigio', 'white', '{"flavor": "dry", "tannins": "soft", "body": "light", "acidity": "medium"}'),

('prosecco', 'sparkling', '{"flavor": "dry", "tannins": "soft", "body": "light", "acidity": "low"}'),

('champagne', 'sparkling', '{"flavor": "dry", "tannins": "medium", "body": "full", "acidity": "high"}');