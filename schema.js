const { gql } = require('apollo-server-express');

exports.typeDefs = gql`

    type User {
        username: String!
        password: String!
        
    }
        
    type Listing {
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username:String!
        type:String!
    }  

    type Booking {
        listing_id: String! 
        booking_id:String!
        booking_date:String!
        booking_start:String!
        booking_end:String! 
        username:String!
    }

   
    type Query {
      getUser:[User]
      getListing: [Listing]
      getBooking:[Booking]
      
      getListingByAdmin(type: String!): [Listing]

      getListingByName(listing_title: String!): [Listing]

      getListingByCity(city: String!): [Listing]
      getUserByID(id: ID!): User
      getListingByID(id: ID!): Listing

      getBookingByID(id: ID!): Booking

      getBookingByuser(username: String!): [Booking]

    }


    type Mutation {

        userSignedIn(
            username: String
            password: String
           
        ): User


        adminSignedIn(
            username: String
            password: String
          
        ): Booking

        addUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type:String
           
         ):User
    

      

        addListing(
            listing_id: String!
            listing_title: String!
            description:String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username:String!
            type:String
       
         ): Listing
     
        
        addBooking(

            listing_id:String!
            booking_id:String!
            booking_date:String!
            booking_start:String!
            booking_end:String!
            username:String!
        ):Booking  
      
        
    }
 ` 