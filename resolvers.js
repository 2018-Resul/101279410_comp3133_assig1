const User = require('./models/User');
const Listing = require('./models/Listing');
const Booking = require('./models/Booking');


exports.resolvers = {
    Query: {

        getUser: async (parent, args) => {
            return await User.find({});
        },
        getListing: async (parent, args) => {
            return await Listing.find({});
        },

        getBooking: async (parent, args) => {
            return await Booking.find({});
        },

        getListingByAdmin: async (parent, args) => {
            return await Listing.find({ "type": args.type });
        },
        
       getListingByName: async (parent, args) => {
            return await Listing.find({ "listing_title": args.listing_title });
        },
        
        getListingByCity: async (parent, args) => {
            return await Listing.find({ "city": args.city });
        },


        getUserByID: async (parent, args) => {
            return await User.findById(args.id);
        },
        getListingByID: async (parent, args) => {
            return await Listing.findById(args.id);
        },
        getBookingByID: async (parent, args) => {
            return await Booking.findById(args.id);
        },

        getBookingByuser: async (parent, args) => {
            return await Booking.find({ "username": args.username });
        },


    },

    Mutation: {

        addUser: async (parent, args) => {

            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail = emailExpression.test(String(args.email.toLowerCase()))

            if (!isValidEmail) {
                throw new Error("Email is not valid")
            }


            let newUser = new User({
                username:args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type,
            });


     
            return await newUser.save();
        },

        userSignedIn: async (parent, {username,password} ) => {

            const user = await User.findOne({ username: username });

            if (!user) {
                throw new Error('User does not exist!');
            }

            const passwordDB = user.password;


            if (passwordDB != password) {
                throw new Error('Password is not correct!');
            }

            return {  username: user.username, password: user.password };
        },


        adminSignedIn: async (parent, {username,password} ) => {

            const user = await Listing.findOne({ username: username });

            if (!user) {
                throw new Error('Admin does not exist!');
            }

            const passwordDB = user.password;


            if (passwordDB != password) {
                throw new Error('Admin Password is not correct!');
            }

            return {  username: user.username, password: user.password };
        },

        

        addListing: async (parent, args) => {
           
            const emailExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail = emailExp.test(String(args.email).toLowerCase())

            if (!isValidEmail) {
                throw new Error("Email is not valid")
            }

            let newListing = new Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username,
                type: args.type,
              
            });


           
   

            return await newListing.save();
        },



        addBooking: async (parent, args) => {

            let newBooking = new Booking({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: args.username,
            });
            return await newBooking.save();
        },



    }
}