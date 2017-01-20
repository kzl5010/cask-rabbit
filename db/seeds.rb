# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



User.create({email: "fakeaccount@gmail.com", password: "password", zip_code: "94103", first_name: "Guest", last_name: "Account", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake1account@gmail.com", password: "password", zip_code: "81233", first_name: "Guest", last_name: "Account", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake2account@gmail.com", password: "password", zip_code: "10003", first_name: "Guest", last_name: "Account", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake3account@gmail.com", password: "password", zip_code: "12343", first_name: "Guest", last_name: "Account", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake4account@gmail.com", password: "password", zip_code: "94103", first_name: "Guest", last_name: "Account", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })


Tasker.create({name: "Dr. Geraldo Rivera", email: "geraldo@gmail.io", zip_code: "94103", price: 500, imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484908294/MTE5NDg0MDU1MTEzOTI2MTU5_ng7vgh.jpg"})
Tasker.create({name: "Dr. Neil Degrasse Tyson", email: "realndgt@yahoo.io", zip_code: "94103", price: 100, imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484908800/1432067001553.cached_yxfuzv.jpg"})
Tasker.create({name: "Dr. Jerry Springer", email: "djspringer@aol.com", zip_code: "94103", price: 700, imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484908527/o-JERRY-SPRINGER-TRANSPHOBIA-facebook_bpkg9v.jpg"})
Tasker.create({name: "Dr. Jerry Seinfeld", email: "seinfeld123@nbc.io", zip_code: "94103", price: 900, imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484908870/LAm8cB1b_yfyiwl.jpg"})
Tasker.create({name: "Dr. George Costanza", email: "artvandelay@gmail.io", zip_code: "90210", price: 1500, imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484908928/george-constanza-600x800_ie5bl9.jpg"})

Task.create({title: "Number Theory Tutoring", description: "In depth personalized instruction on how to master prime numbers", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484909215/disscloud_w3rbcr.png" })
Task.create({title: "Physics Tutoring", description: "This is the science of everything except metaphysics and math", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484909078/250px-Prinicipia-title_cllysg.png" })
Task.create({title: "How to check out library books and use the internet to learn", description: "Tutor will teach the student how to learn independently", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484786853/636088662536835042-1570042978_library_mpwvu3.jpg" })
Task.create({title: "How to use the internet", description: "Targeted teaching on using the internet for the elderly set to whom celebrity is the only credential", imageurl: "http://res.cloudinary.com/dsaxhw9ii/image/upload/v1484909382/db-aol-1999-web1-articleLarge_c3bml0.jpg" })
