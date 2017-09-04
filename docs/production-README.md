# README

# PotatosFloat


[potatosfloat][heroku]
[heroku]: link to potatos float here

PotatosFloat is a full-stack web application that allows travelers to connect with locals
and crash on there couch similar to Couchsurfing. It utilizes Ruby on Rails on the backend, React.js and Redux framework on the frontend with a postgresql database.

## Features

* Authentication
  * Sign Up/Log In forms
  * Demo Login
* Create Spot
* Create Booking
* Search Spots

## Implementation

### Spots

Spots represent 'host' user's places that are potentially available for surfers to book and stay when traveling. Spots takes one table 'spots' with necessary information including `title`, `description`, `lat` & `lng` coordinates for map implementation, as well as other descriptors such as `sleep_option` (i.e. Private Room, Public Room, Shared Room, Shared Bed), and `capacity`. Each spot belongs_to a user and contains its 'host_id' in the spots table as well.

### Bookings

Bookings are kept in their own table 'bookings' with respective `start_date`, `end_date`, `surfer_id` (referencing the 'users' table) & `spot_id`. Hosts must approve of all bookings before they are finalized.


### Spot Search

Users are able to search through the index of Spots by selecting desired filters from `capacity` and `sleep_option` (referencing the spots table).


## Future for the Project

### Booking development (more handling/displaying of bookings)

Users will be able to view their bookings as well as respond to the booking requests for their respective spots.

### Reviews

Users will be able to write reviews regarding the spots they've requested/visited. A spot's reviews will be included on the spots Show page.

### User Profiles

User will have profiles they can create/edit to accompany their spot details for surfers.

### Messaging

Hosts and Surfers will be able to message one another.
