create table users
(
	id serial not null
		constraint users_pkey
			primary key,
	first_name varchar(20) not null,
	surname varchar(25) not null,
	phone varchar(20) not null,
	email varchar(35) not null,
	address varchar(100) not null
)
;

create unique index users_id_uindex
	on users (id)
;

create unique index users_email_uindex
	on users (email)
;

create table orders
(
	id serial not null
		constraint orders_pkey
			primary key,
	id_user integer not null
		constraint orders_users_id_fk
			references users,
	payed boolean not null,
	payed_at date,
	created_at date not null
)
;

create unique index orders_id_uindex
	on orders (id)
;

create unique index orders_id_user_uindex
	on orders (id_user)
;

create table artists
(
	id serial not null
		constraint artists_pkey
			primary key,
	name varchar(50) not null
)
;

create unique index artists_id_uindex
	on artists (id)
;

create table types
(
	id serial not null
		constraint types_pkey
			primary key,
	name varchar(10) not null
)
;

create unique index types_id_uindex
	on types (id)
;

create unique index types_name_uindex
	on types (name)
;

create table products
(
	id serial not null
		constraint products_pkey
			primary key,
	name varchar(50) not null,
	id_type integer not null
		constraint products_types_id_fk
			references types,
	year integer not null,
	price integer not null,
	img_link varchar(20)
)
;

create unique index products_id_uindex
	on products (id)
;

create table autors
(
	id_product integer not null
		constraint autors_products_id_fk
			references products,
	id_artist integer
		constraint autors_artists_id_fk
			references artists
)
;

create table prod_orders
(
	id_product integer not null
		constraint prod_orders_products_id_fk
			references products,
	id_order integer not null
		constraint prod_orders_orders_id_fk
			references orders
)
;

