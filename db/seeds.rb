# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


pools = Pool.create([
  {
    name: "Freyberg Pool 33m",
    image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
  },
  {
    name: "Wellington Regional Aquatic Centre (WRAC) 25m/50m",
    image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
  },
  {
    name: "Thorndon Summer Pool",
    image_url: "https://open-flights.s3.amazonaws.com/Delta.png"
  },
  {
    name: "Olympic Newmarket 50M",
    image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png"
  },
  {
    name: "Parnell Summer Baths 66M",
    image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png"
  },
  {
    name: "Sir Owen G. Glenn National Aquatic Centre, AUT Millennium 50m",
    image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png"
  }
])


reviews = Review.create([
	{
		title: 'Awesome',
		description: 'had a great time',
		score: 5,
		pool: pools.first
	},
	{
		title: 'Not so great',
		description: 'pool was over crowded',
		score: 1,
		pool: pools.first
	}
])