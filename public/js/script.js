const states = {
    "IN-JK": "Jammu and Kashmir",
    "IN-HP": "Himachal Pradesh",
    "IN-PB": "Punjab",
    "IN-CH": "Chandigarh",
    "IN-HR": "Haryana",
    "IN-UT": "Uttarakhand",
    "IN-UP": "Uttar Pradesh",
    "IN-RJ": "Rajasthan",
    "IN-DL": "Delhi",
    "IN-GJ": "Gujarat",
    "IN-MP": "Madhya Pradesh",
    "IN-MH": "Maharashtra",
    "IN-KA": "Karnataka",
    "IN-TG": "Telangana",
    "IN-AP": "Andhra Pradesh",
    "IN-TN": "Tamil Nadu",
    "IN-KL": "Kerala",
    "IN-OR": "Odisha",
    "IN-CT": "Chhattisgarh",
    "IN-JH": "Jharkhand",
    "IN-BR": "Bihar",
    "IN-WB": "West Bengal",
    "IN-SK": "Sikkim",
    "IN-AS": "Assam",
    "IN-ML": "Meghalaya",
    "IN-TR": "Tripura",
    "IN-MZ": "Mizoram",
    "IN-MN": "Manipur",
    "IN-NL": "Nagaland",
    "IN-AR": "Arunachal Pradesh",
    "IN-AN": "Andaman and Nicobar Islands",
    "IN-GA": "Goa"
};





$('.map-IN path').mouseover(function() {
    console.log(this.id);
    $('.name span').text(states[this.id]);
});

$('.map-IN path').click(function() {
    $('.map-IN path').css({strokeWidth:'0.5'});
    $("input[name='stateCode']").val(this.id);
    $("input[name='stateName']").val(states[this.id]);
    $(`#${this.id}`).css({strokeWidth:'1.5'});
});



// async function Submit(event) {
//     event.preventDefault();
//     let code = $("input[name='stateCode']").val();
//     let state = states[code];
//     try {
//         const response = await axios.post('/add', {
//             stateCode: code,
//             stateName: state
//         });
//         console.log(response.data); // Optional: Log the server response
//     } catch (error) {
//         console.error("Error submitting form:", error);
//     }
// }
