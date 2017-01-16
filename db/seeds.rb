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
  Tasker.create({name: Faker::Name, email: Faker::Internet.email, zip_code: Faker::Address.zip_code})
  Task.create({title: Faker::Lorem.word, description: Faker::Lorem.word, location: Faker::Address.street_address })
end

10.times do
  TaskRequest.create({user_id: (11+a.rand(10)), task_id: (a.rand(10)+1), tasker_id: (a.rand(10)+1)})
end
