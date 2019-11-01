insert into users(
    is_admin, 
    username, 
    password,
    doctor
) values(
    $1,
    $2,
    $3,
    $4
)
returning *;