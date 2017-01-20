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
  Tasker.create({name: Faker::Name.name, email: Faker::Internet.email, zip_code: Faker::Address.zip_code, price: (a.rand(70)+20)})
  Task.create({title: Faker::Lorem.word, description: Faker::Lorem.word })
end

5.times do
  TaskRequest.create({user_id: (1+a.rand(10)), task_id: (a.rand(5)+1), tasker_id: (a.rand(5)+1), date: "08-Jan-99", address: Faker::Address.street_address})
end


User.create({email: "fakeaccount@gmail.com", password: "password", zip_code: "94103", first_name: "Guest", last_name: "Account", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake1account@gmail.com", password: "password", zip_code: "81233", first_name: "Guest", last_name: "Account", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake2account@gmail.com", password: "password", zip_code: "10003", first_name: "Guest", last_name: "Account", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake3account@gmail.com", password: "password", zip_code: "12343", first_name: "Guest", last_name: "Account", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake4account@gmail.com", password: "password", zip_code: "94103", first_name: "Guest", last_name: "Account", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
