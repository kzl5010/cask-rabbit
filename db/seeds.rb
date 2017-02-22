# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



User.create({email: "fakeaccount@gmail.com", password: "password", zip_code: "94103", first_name: "Guest", last_name: "Account", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake1account@gmail.com", password: "password", zip_code: "81233", first_name: "Guest", last_name: "Account", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake2account@gmail.com", password: "password", zip_code: "10003", first_name: "Guest", last_name: "Account", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake3account@gmail.com", password: "password", zip_code: "12343", first_name: "Guest", last_name: "Account", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })
User.create({email: "fake4account@gmail.com", password: "password", zip_code: "94103", first_name: "Guest", last_name: "Account", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484903341/rabbit_0_p8mcvj.jpg"  })


Tasker.create({name: "Dr. Geraldo Rivera", email: "geraldo@gmail.io", zip_code: "94103", price: 500, imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484908294/MTE5NDg0MDU1MTEzOTI2MTU5_ng7vgh.jpg"})
Tasker.create({name: "Dr. Neil Degrasse Tyson", email: "realndgt@yahoo.io", zip_code: "94103", price: 100, imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484908800/1432067001553.cached_yxfuzv.jpg"})
Tasker.create({name: "Dr. Jerry Springer", email: "djspringer@aol.com", zip_code: "94103", price: 700, imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1485070491/ct-612693_unaail.jpg"})
Tasker.create({name: "Dr. Jerry Seinfeld", email: "kelvarnsen@nbc.io", zip_code: "94103", price: 900, imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484908870/LAm8cB1b_yfyiwl.jpg"})
Tasker.create({name: "Dr. George Costanza", email: "artvandelay@gmail.io", zip_code: "90210", price: 1500, imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484908928/george-constanza-600x800_ie5bl9.jpg"})
Tasker.create({name: "Dr. Cosmo Kramer", email: "hepennypacker@gmail.io", zip_code: "90210", price: 2000, imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1485071238/o-KRAMER-SEINFELD-facebook_hgrsjg.jpg"})

Task.create({title: "Number Theory Tutoring", description: "In depth personalized instruction on how to master prime numbers", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484909215/disscloud_w3rbcr.png" })
Task.create({title: "Physics Tutoring", description: "This is the science of everything except metaphysics and math", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484909078/250px-Prinicipia-title_cllysg.png" })
Task.create({title: "What is a library?", description: "Tutor will show the student how to learn independently", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484786853/636088662536835042-1570042978_library_mpwvu3.jpg" })
Task.create({title: "Learn to use the internet", description: "Something I always wish I had done", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1484909382/db-aol-1999-web1-articleLarge_c3bml0.jpg" })
Task.create({title: "SAT Preparation", description: "You will get a 1600 or a full refund (minimum 40 hours)", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1485070677/41aztRgNxvL._SX378_BO1_204_203_200__tunwls.jpg" })
Task.create({title: "Chemistry Tutoring", description: "For those interested in becoming a character from the show Breaking Bad", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1485070637/61icv76jI9L._SL1500__elkpol.jpg" })
Task.create({title: "Counting Cards", description: "Basically \"who wants to be a millionaire\"", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1487786667/Hi-Lo-Card-Counting-Values_gci4jf.jpg" })
Task.create({title: "Computer Science", description: "Algorithms and things", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1487786543/cs161logo_anjzfk.png" })
