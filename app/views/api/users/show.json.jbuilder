json.partial! "api/users/user", user: @user
json.extract! @user, :first_name, :email 
