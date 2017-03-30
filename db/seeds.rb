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

Task.create({title: "Number Theory Tutoring", description: "Addition", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1490838717/Leonhard_Euler_jqsmnl.jpg" })
Task.create({title: "Physics Tutoring", description: "Calculus", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1490849647/Sir-Issac-Newton_uhpiuj.jpg" })
Task.create({title: "What is a library?", description: "Books", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1490849861/library_gdrbap.jpg" })
Task.create({title: "Learn to use the internet", description: "Google", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1490850024/akamai-state-of-the-internet-global-client-reputation-visualization_yayanh.jpg" })
Task.create({title: "SAT Preparation", description: "1600", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1490849513/SAT_veyplq.jpg" })
Task.create({title: "Chemistry Tutoring", description: "Cooking", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1490839078/2c8e2b4d1cb9fb3a084bb4c0905a9bc12b543dc8_luijzl.jpg" })
Task.create({title: "Counting Cards", description: "Free Money", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1490838761/images_yq55ja.jpg" })
Task.create({title: "Computer Science", description: "Algorithms", imageurl: "https://res.cloudinary.com/dsaxhw9ii/image/upload/v1490838785/maxresdefault_qzvmol.jpg" })
