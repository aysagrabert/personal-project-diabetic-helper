-- users table
create table users (
    users_id serial primary key,
    is_admin boolean default false,
    username varchar(250),
    password varchar(250),
    doctor varchar(250)
)

insert into users 
(is_admin, username, password, doctor)
values
(true, 'Dr.Tucker', '1111', null),
(true, 'Dr.Davis', '2222', null),
(false, 'Wyatt Mata', '333', 'Dr.Tucker'),
(false, 'Sarah Young', '4444', 'Dr.Tucker'),
(false, 'Keith Moore', '5555', 'Dr.Davis'),
(false, 'Hope Vega', '6666', 'Dr.Davis')

select *
from users

--tracker
--carbs
--blood sugar
--chat room
--massages