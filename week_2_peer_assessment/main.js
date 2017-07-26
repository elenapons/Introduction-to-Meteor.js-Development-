// shared code
Websites = new Mongo.Collection("websites");

// client only code
if (Meteor.isClient){
    // event listeners on the addSiteForm template
    Template.addSiteForm.events({
        // this runs when they click the add button... you need to compete it
     'click .js-add-site':function(event){
         var url = $('#url_input').val();// get the form value using jquery...
         var site = {"url":url};// create a simple object to insert to the collectoin

         console.log("You need to put some code in here that calls insert on the Websites collection");
         Websites.insert(site);
         return false;
     }
    });

    // this helper gets the data from the collection for the site-list Template
    Template.siteList.helpers({
        'all_websites':function(){
            return Websites.find({});
        },
    });

}
