// Holiday Country codes
const country_codes = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Brazil", code: "BR" },
  { name: "British Virgin Islands", code: "VG" },
  { name: "Brunei", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cabo Verde", code: "CV" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo Democratic Republic", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote d'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Curaçao", code: "CW" },
  { name: "Cyprus", code: "CY" },
  { name: "Czechia", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "East Timor", code: "TL" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "eSwatini", code: "SZ" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Kosovo", code: "XK" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Laos", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macau", code: "MO" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia", code: "FM" },
  { name: "Moldova", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "North Korea", code: "KP" },
  { name: "North Macedonia", code: "MK" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russia", code: "RE" },
  { name: "Rwanda", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Martin", code: "MF" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Sint Maarten", code: "SX" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Korea", code: "KR" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "St. Barts", code: "BL" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syria", code: "SY" },
  { name: "Taiwan", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "The Bahamas", code: "BH" },
  { name: "Togo", code: "TG" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "Uruguay", code: "UY" },
  { name: "US Virgin Islands", code: "VI" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Vatican City (Holy See)", code: "VA" },
  { name: "Venezuela", code: "VE" },
  { name: "Vietnam", code: "VN" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

const year_list = [
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2023,
  2024,
  2025,
  2026,
  2027,
  2028,
  2029,
  2030,
  2031,
  2032,
  2033,
  2034,
  2035,
  2036,
  2037,
  2038,
  2039,
  2040,
  2041,
  2042,
  2043,
  2044,
  2045,
  2046,
  2047,
  2048,
  2049,
  2050,
];

const month_list = [
  {
    value: 1,
    name: "January",
  },
  {
    value: 2,
    name: "February",
  },
  {
    value: 3,
    name: "March",
  },
  {
    value: 4,
    name: "April",
  },
  {
    value: 5,
    name: "May",
  },
  {
    value: 6,
    name: "June",
  },
  {
    value: 7,
    name: "July",
  },
  {
    value: 8,
    name: "August",
  },
  {
    value: 9,
    name: "September",
  },
  {
    value: 10,
    name: "October",
  },
  {
    value: 11,
    name: "November",
  },
  {
    value: 12,
    name: "December",
  },
];

let days = 31;
const baseUrl =
  "https://holidays.abstractapi.com/v1/?api_key=50fe3d3808b94c5d8e6cc9df9768a290";

const div_container = document.createElement("div");
div_container.setAttribute("class", "container div__container");
div_container.innerHTML = `
    <h1>Abstract Public Holidays</h1>
    <h4>Select any 1 option from each field <span class="error"><sup>*</sup>Required</span></h4>
`;

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// div_selects
const div_selects = document.createElement("div");
div_selects.setAttribute("class", "div__selects");

// div_selects - country
const div_country = document.createElement("div");
div_country.setAttribute("class", "p-1");
div_country.innerHTML = `<label class="select__label">Country</label>`;

const select_country = document.createElement("select");
setAttributes(select_country, {
  "class": "select__country",
  "aria-label": "country",
  "name": "country",
  "required": true,
});

country_codes.map(
  (item) =>
    (select_country.innerHTML += `<option value="${item.code}">${item.name}</option>`)
);
div_country.appendChild(select_country);

// div_selects - year
const div_year = document.createElement("div");
div_year.setAttribute("class", "p-1");
div_year.innerHTML = `<label class="select__label">Year</label>`;

const select_year = document.createElement("select");
setAttributes(select_year, {
  "class": "select__year",
  "aria-label": "year",
  "name": "year",
  "onchange": "getDaysInMonth()",
  "required": true,
});

year_list.map(
  (item) =>
    (select_year.innerHTML += `<option value="${item}">${item}</option>`)
);
div_year.appendChild(select_year);

// div_selects - month
const div_month = document.createElement("div");
div_month.setAttribute("class", "p-1");
div_month.innerHTML = `<label class="select__label">Month</label>`;

const select_month = document.createElement("select");
setAttributes(select_month, {
  "class": "select__month",
  "aria-label": "month",
  "name": "month",
  "onchange": "getDaysInMonth()",
  "required": true,
});

month_list.map(
  (item) =>
    (select_month.innerHTML += `<option value="${item.value}">${item.name}</option>`)
);
div_month.appendChild(select_month);

// div_selects - day
const div_day = document.createElement("div");
div_day.setAttribute("class", "p-1");
div_day.innerHTML = `<label class="select__label">Day</label>`;

const select_day = document.createElement("select");
setAttributes(select_day, {
  "class": "select__day",
  "aria-label": "day",
  "name": "day",
  "required": true,
});

createMonthSelect();
div_day.appendChild(select_day);

// function to get number of days in a month
function getDaysInMonth() {
  let year = parseInt(select_year.selectedOptions[0].value);
  let month = parseInt(select_month.selectedOptions[0].value);

  days = new Date(year, month, 0).getDate();
  createMonthSelect();
}

function createMonthSelect() {
  select_day.innerHTML = "";
  for (let i = 1; i <= days; i++) {
    select_day.innerHTML += `<option value="${i}">${i}</option>`;
  }
}

div_selects.append(div_country, div_year, div_month, div_day);

// button
const button = document.createElement("button");
setAttributes(button, {
  class: "btn btn-primary my-3",
  type: "button",
  onclick: "showResult()",
});
button.innerText = "Show Holidays";

// div_result
const div_result = document.createElement("div");
div_result.setAttribute("class", "div__result");

async function showResult() {
  div_result.innerHTML = "";
  const response = await fetch(
    `${baseUrl}&country=${select_country.value}&year=${select_year.value}&month=${select_month.value}&day=${select_day.value}`
  );
  const data = await response.json();

  if (data.length) {
    // table
    const table = document.createElement("table");
    table.setAttribute(
      "class",
      "table table-striped table-bordered table-responsive "
    );
    table.innerHTML = `
        <thead class="table-dark">
        <tr>
            <td>Country</td>
            <td colspan="3"><h4><b>${data[0].location}</b></h4></td>
        </tr>
        <tr>
            <td>Date (mm/dd/yyyy)</td>
            <td colspan="3"><h5><b>${select_month.value}/${select_day.value}/${select_year.value}</b></h5></td>
        </tr>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Week Day</th>
        <th scope="col">Type</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
        `;

    const tableContent = createTableContent(data);
    table.append(tableContent);
    div_result.appendChild(table);
  } else {
    div_result.innerHTML = `<h2 class="error text-center">No Holiday Found</h2>`;
  }
}

function createTableContent(data) {
  const tbody = document.createElement("tbody");
  tbody.setAttribute("class", "table-light");
  tbody.innerHTML = "";

  data.map(
    (item) =>
      (tbody.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.week_day}</td>
            <td>${item.type}</td>
            <td>${item.description}</td>
        </tr>
        `)
  );
  return tbody;
}

div_container.append(div_selects, button, div_result);
document.body.append(div_container);
