require('dotenv').config();
const request = require('request');
const uuidv4 = require('uuid/v4');
require('./language_recognition.js')
/* Checks to see if the subscription key is available
as an environment variable. If you are setting your subscription key as a
string, then comment these lines out.

If you want to set your subscription key as a string, replace the value for
the Ocp-Apim-Subscription-Key header as a string. */
const subscriptionKey = process.env.TRANSLATOR_TEXT_KEY;
let phrases = ['Hello', 'Good morning', 'Please', 'How much money'];

function translate(language) {
  for (i = 0; i < phrases.length; i++) {

    if (!subscriptionKey) {
      throw new Error('Environment variable for your subscription key is not set.');
    }

    let options = {
      method: 'POST',
      baseUrl: 'https://api.cognitive.microsofttranslator.com/',
      url: 'translate',
      qs: {
        'api-version': '3.0',
        to: language
      },
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
      },
      body: [
        {
          text: phrases[i]
        }
      ],
      json: true
    };

    request(options, function (err, res, body) {
      console.log(JSON.stringify(body, null, 5));
      console.log("--------------------------------");
    });
  }
};


module.exports = translate;

// 	render() {
// 		return (
// 			<Row>
// 				<Col size="md-12">
// 					<Panel title="Phrases">
// 						{this.state.phrases.length ? (
// 							<List>
// 								{this.state.phrases.map(phrases => (
// 									<Phrases />
// 								))}
// 							</List>
// 						) : (
// 								<h2 className="text-center">{this.state.message}</h2>
// 							)}
// 					</Panel>
// 				</Col>
// 			</Row>
// 		);
// 	}

// }

// translate('es', phrases);
