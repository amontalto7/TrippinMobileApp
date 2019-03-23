import React, { Component } from "react";
import Axios from "axios";
import { Button, View, WebView } from "react-native";
import { ListItem } from "react-native-elements";
import { List } from "./../components/common/List";
const exampleCountry = {
  country: "Venezuela",
  content:
    '\n<p>Do not travel to Venezuela due to <b>crime, civil unrest, poor health infrastructure, and arbitrary arrest and detention of U.S. citizens</b>. Some areas have increased risk. Read the entire Travel Advisory.</p>\n<p>On March 11, 2019, the U.S. Department of State announced the temporary suspension of operations of the U.S. Embassy in Caracas and the withdrawal of diplomatic personnel from Venezuela<b>.&nbsp;</b>The U.S. Embassy in Caracas is not providing any consular services. U.S. citizens residing or traveling in Venezuela should depart Venezuela.&nbsp; Commercial flights remain available.</p>\n<p>The safety and security of U.S. citizens is our highest priority. If you are a U.S. citizen in Venezuela in need of assistance, or are concerned about a U.S. citizen in Venezuela, please contact the Department of State in one of the following ways:</p>\n<ul>\n<li><b>Visit our website</b> <a href="https://tfa.state.gov/" adhocenable="false">Task Force Alert</a> and select &#8220;2019 Venezuela Unrest&#8221;; or</li>\n<li><b>Email</b> <a href="mailto:VenezuelaEmergencyUSC@state.gov">VenezuelaEmergencyUSC@state.gov</a>&nbsp; and provide as much information as possible (at a minimum, please provide the full name, gender, and last known location and/or contact information of the U.S. citizen); or</li>\n<li><b>Call</b> us at 1-888-407-4747 (from the U.S. &amp; Canada), +1-202-501-4444 (from Overseas).</li>\n</ul>\n<p>Violent crime, such as homicide, armed robbery, kidnapping, and carjacking, is common.</p>\n<p>Political rallies and demonstrations occur, often with little notice. Demonstrations typically elicit a strong police and security force response that includes the use of tear gas, pepper spray, water cannons, and rubber bullets against participants and occasionally devolve into looting and vandalism.</p>\n<p>There are shortages of food, electricity, water, medicine, and medical supplies throughout much of Venezuela. The U.S. Centers for Disease Control and Prevention (CDC) issued a <a href="https://wwwnc.cdc.gov/travel/notices/warning/health-infrastructure-breakdown-venezuela">Level 3 &#8216;Avoid Nonessential Travel&#8217;</a> notice on May 15, 2018 due to inadequate healthcare and the breakdown of the medical infrastructure in Venezuela. Consular access to detained U.S. citizens who also have Venezuelan nationality is severely restricted by the Venezuelan government.</p>\n<p>Security forces have arbitrarily detained U.S. citizens for long periods. The U.S. Department of State may not be notified of the detention of a U.S. citizen, and consular access to detainees may be denied or severely delayed.</p>\n<p>Read the Safety and Security section on the <a adhocenable="false" href="/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Venezuela.html">country information page</a>.</p>\n<p>If you decide to travel to Venezuela:</p>\n<ul>\n<li>Do not travel between cities after dark.</li>\n<li>Avoid travel between Sim&#243;n Bol&#237;var International Airport and Caracas at night.</li>\n<li>Do not take unregulated taxis from Sim&#243;n Bol&#237;var International Airport, and avoid ATMs in this area.</li>\n<li>Avoid demonstrations.</li>\n<li>Bring a sufficient supply of over-the-counter and prescription medicines.</li>\n<li>Visit our website for <a href="/content/passports/en/go/TraveltoHighRiskAreas.html" adhocenable="false">Travel to High-Risk Areas</a>.</li>\n<li>Enroll in the <a href="https://step.state.gov/step/">Smart Traveler Enrollment Program</a> (<a href="https://step.state.gov/step/">STEP</a>) to receive Alerts and make it easier to locate you in an emergency.</li>\n<li>Follow the Department of State on <a href="https://www.facebook.com/travelgov">Facebook</a> and <a href="https://twitter.com/travelgov">Twitter</a>.</li>\n<li>Review the Crime and Safety Report for Venezuela.</li>\n</ul>\n<p>U.S. citizens who travel abroad should always have a contingency plan for emergency situations. Review the <a href="/content/passports/en/go/checklist.html" adhocenable="false">Traveler&#8217;s Checklist</a>.</p>\n<p><b><i>Last Update: Reissued after March 11, 2019 announcement of temporary suspension of operations of the U.S. Embassy in Caracas and withdrawal of diplomatic personnel in Venezuela.</i></b></p>\n',
  title: "Venezuela - Level 4: Do Not Travel",
  level: 4,
  link:
    "http://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/venezuela-travel-advisory.html",
  countrySearchable: "venezuela"
};

export default class TravelAdvisoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { countries: [], key: 0 };
  }

  pullCountriesList() {
    // console.log("test");
    Axios.get("http://160.39.9.177:3001/api/travel_advisories")
      .then(response => {
        // console.log(response.data);

        let countriesArray = response.data.countriesList;
        // console.log(Array.isArray(countriesArray));
        // console.log(countriesArray[0]);
        this.setState = {
          countries: countriesArray,
          key: this.key + 1
        };
        console.log(this.setState.countries.length);
        this.forceUpdate();

      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.pullCountriesList.bind(this)}
          title="Load Travel Advisories"
          color="#1194F6"
          accessibilityLabel="Press to populate travel advisories"
        />
        <List countries={this.state.countries} />
      </View>
    );
  }
}
