USE sakila;
SELECT customer.first_name, customer.last_name, customer.email, address.address, city.city, address.city_id FROM customer 
JOIN address ON customer.address_id = address.address_id 
JOIN city ON address.city_id =city.city_id
WHERE address.city_id = 312;

SELECT title, description, release_year, rating, special_features, category.name AS genre FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = "comedy";

SELECT actor.actor_id, CONCAT(actor.first_name, " ",actor.last_name) AS actor_name, film.title, film.description, film.release_year FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film_actor.actor_id = 5;

SELECT customer.first_name, customer.last_name, email, address.address, store.store_id,city.city_id, city.city 
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN store ON customer.store_id = store.store_id
WHERE store.store_id = 1 AND city.city_id IN (1, 42, 312,459);

SELECT title, description, release_year, rating, special_features FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.rating = "G" AND film.special_features LIKE "%behind_the_scenes%" AND actor.actor_id = 15;

SELECT actor.actor_id, CONCAT(actor.first_name, " ", actor.last_name) AS actor_name, film.film_id, film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 369;

SELECT title, description, release_year, rating, special_features, rental_rate, category.name AS genre FROM film 
JOIN film_category ON film.film_id = film_category.film_id 
JOIN category ON film_category.category_id = category.category_id 
WHERE film.rental_rate = 2.99 AND category.name = 'Drama';

SELECT title, description, release_year, rating, special_features, category.name AS genre, 
CONCAT(actor.first_name, " ", actor.last_name) AS actor_name, actor.actor_id FROM film
JOIN film_category ON film.film_id = film_category.film_id 
JOIN category ON film_category.category_id = category.category_id 
JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE category.name = "action"  AND CONCAT(actor.first_name, " ", actor.last_name) = "SANDRA KILMER";






