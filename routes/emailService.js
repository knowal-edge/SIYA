var request = require('request');
require('dotenv').config()
module.exports = {
    
    //API to trigger mail from IFTTT
    sendfeedbackEmail: function (rating,topic_liked,comments) {
        var options = {
            uri: "https://maker.ifttt.com/trigger/SIYA_feedback_service/with/key/"+process.env.IFTTT_KEY,
            headers: {
              'Content-Type': "application/json",
                  },
              body: "{\"value1\":\""+rating+"\",\"value2\":\""+topic_liked+"\",\"value1\":\""+comments+"\"}"
          };
          request.post(options, (error, response, body) => {
            if (error) {
              console.log('Error: ', error);
              return;
            }   
        });
    }
};







  
 