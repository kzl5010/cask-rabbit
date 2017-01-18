# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

a = Random.new
15.times do
  User.create({email: Faker::Internet.email, password: "password", zip_code: Faker::Address.zip_code, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name})
end

5.times do
  Tasker.create({name: Faker::Name.name, email: Faker::Internet.email, zip_code: Faker::Address.zip_code})
  Task.create({title: Faker::Lorem.word, description: Faker::Lorem.word })
end

5.times do
  TaskRequest.create({user_id: (1+a.rand(10)), task_id: (a.rand(5)+1), tasker_id: (a.rand(5)+1), date: "08-Jan-99", address: Faker::Address.street_address})
end
