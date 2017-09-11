/*
 - AF only supports AU and NZ address types for now
 - Provinces contain a list of Shopify field-value mappings
 - Each of the keys within the `countries` object become:
   - Instances of a widget
   - Watch values for the Country form field
*/
(function(w){
  var countries = {
    list: {
      au: {
        iso: 'AU',
        title: 'Australia',
        provinceSelectAPIMappings: {
          'ACT': ['Australian Capital Territory', 'ACT'],
          'NSW': ['New South Wales', 'NSW'],
          'NT' : ['Northern Territory', 'NT'],
          'QLD': ['Queensland', 'QLD'],
          'SA' : ['South Australia', 'SA'],
          'TAS': ['Tasmania', 'TAS'],
          'VIC': ['Victoria', 'VIC'],
          'WA' : ['Western Australia', 'WA'],
          'OT' : [null]
        },
        provinceInputAPIMappings: {
          'ACT': 'Australian Capital Territory',
          'NSW': 'New South Wales',
          'NT' : 'Northern Territory',
          'QLD': 'Queensland',
          'SA' : 'South Australia',
          'TAS': 'Tasmania',
          'VIC': 'Victoria',
          'WA' : 'Western Australia',
          'OT' : null
        },
        fieldAPIMappings: {
          address1: {
            name: 'address_line_1',
            type: 'field'
          },
          address2: {
            name: 'address_line_2',
            type: 'field'
          },
          city: {
            name: 'locality_name',
            type: 'field'
          },
          province: {
            name: 'state_territory',
            type: 'lookup'
          },
          zip: {
            name: 'postcode',
            type: 'field'
          }
        }
      },
      nz: {
        iso: 'NZ',
        title: 'New Zealand',
        provinceSelectAPIMappings: {
          'Auckland Region':          ['Auckland', 'AUK'],
          'Bay of Plenty Region':     ['Bay of Plenty', 'BOP'],
          'Canterbury Region':        ['Canterbury', 'CAN'],
          'Gisborne Region':          ['Gisborne', 'GIS'],
          'Hawke\'s Bay Region':      ['Hawke\'s Bay', 'HKB'],
          'Manawatu-Wanganui Region': ['Manawatu-Wanganui', 'MWT'],
          'Marlborough Region':       ['Marlborough', 'MBH'],
          'Nelson Region':            ['Nelson', 'NSN'],
          'Northland Region':         ['Northland', 'NTL'],
          'Otago Region':             ['Otago', 'OTA'],
          'Southland Region':         ['Southland', 'STL'],
          'Taranaki Region':          ['Taranaki', 'TKI'],
          'Tasman Region':            ['Tasman', 'TAS'],
          'Waikato Region':           ['Waikato', 'WKO'],
          'Wellington Region':        ['Wellington', 'WGN'],
          'West Coast Region':        ['West Coast', 'WTC'],
          'Other Region':             [null]
        },
        provinceInputAPIMappings: {
          'Auckland Region':          'Auckland',
          'Bay of Plenty Region':     'Bay of Plenty',
          'Canterbury Region':        'Canterbury',
          'Gisborne Region':          'Gisborne',
          'Hawke\'s Bay Region':      'Hawke\'s Bay',
          'Manawatu-Wanganui Region': 'Manawatu-Wanganui',
          'Marlborough Region':       'Marlborough',
          'Nelson Region':            'Nelson',
          'Northland Region':         'Northland',
          'Otago Region':             'Otago',
          'Southland Region':         'Southland',
          'Taranaki Region':          'Taranaki',
          'Tasman Region':            'Tasman',
          'Waikato Region':           'Waikato',
          'Wellington Region':        'Wellington',
          'West Coast Region':        'West Coast',
          'Other Region':             null
        },
        fieldAPIMappings: {
          address1: {
            name: 'address_line_1_and_2',
            type: 'function'
          },
          address2: {
            name: 'suburb',
            type: 'function'
          },
          city: {
            name: 'city',
            type: 'function'
          },
          province: {
            name: 'region',
            type: 'lookup'
          },
          zip: {
            name: 'postcode',
            type: 'function'
          }
        }
      }
    },
    findProvinceFieldValueAlias: function(countryISO, provinceString){
      return this.list[countryISO.toLowerCase()].provinceFieldAliases[provinceString];
    },
    findSelectProvinceValueByAPI: function(countryISO, provinceString){
      return this.list[countryISO.toLowerCase()].provinceSelectAPIMappings[provinceString];
    },
    findInputProvinceValueByAPI: function(countryISO, provinceString){
      return this.list[countryISO.toLowerCase()].provinceInputAPIMappings[provinceString];
    },
    findMappingByValue: function(countryString){
      var list = this.list;
      var countryMapping = list[countryString.toLowerCase()];
      if (!countryMapping) {
        // Might be a word-based country value
        Object.keys(list).forEach(function(keyName){
          var item = list[keyName];
          if (item.title.toUpperCase() == countryString.toUpperCase()) countryMapping = item;
        });
      }
      return countryMapping;
    },
    findCountryAttributeByValue: function(attribute, countryString) {
      var countryMapping = this.findMappingByValue(countryString);
      return countryMapping ? countryMapping[attribute] : countryString;
    },
    findCountryISOByValue: function(countryString){
      return this.findCountryAttributeByValue('iso', countryString);
    }
  };
  w.AF ? w.AF.CountryMappings = countries : w.AF = {CountryMappings: countries};
})(window);
