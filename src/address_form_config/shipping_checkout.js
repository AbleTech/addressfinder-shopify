import regionMappings from './region_mappings'

export default {
  label: "Shipping Checkout",
  layoutSelector: ".section--shipping-address",
  countryIdentifier: 'checkout_shipping_address_country',
  searchIdentifier: "checkout_shipping_address_address1",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: 'checkout_shipping_address_address1',
      address2: 'checkout_shipping_address_address2',
      suburb: null,
      city: 'checkout_shipping_address_city',
      region: 'checkout_shipping_address_province',
      postcode: 'checkout_shipping_address_zip',
    },
    regionMappings: regionMappings
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: 'checkout_shipping_address_address1',
      address2: 'checkout_shipping_address_address2',
      suburb: 'checkout_shipping_address_city',
      state: 'checkout_shipping_address_province',
      postcode: 'checkout_shipping_address_zip',
    },
    stateMappings: null
  }
}