var app = new Vue({
  el: '#myapp',
  data: {
    interventions: "",
    idIntervention: 0,
    date: "",
    nameDemandeur: "",
    surnameDemandeur: "",
    company: "",
    email: "",
    number: "",
    address: "",
    nameIntervenant: "",
    surnameIntervenant: "",
    isSigned: ""
  },
  methods: {
   allRecords: function(){
     axios.post('ajaxfile.php', {
       request: 1
     })
     .then(function (response) {
       app.interventions = response.data;
     })
     .catch(function (error) {
       console.log(error);
     });

   },
   addRecord: function(){

     if(this.date != '' && this.nameDemandeur != '' && this.surnameDemandeur != '' && this.company != '' && this.email != '' && this.number != '' && this.address != ''
     && this.nameIntervenant != '' && this.surnameIntervenant != '' && this.isSigned != ''){
       axios.post('ajaxfile.php', {
         request: 2,
         date: this.date,
         nameDemandeur: this.nameDemandeur,
         surnameDemandeur: this.surnameDemandeur,
         company: this.company,
         email: this.email,
         number: this.number,
         address: this.address,
         nameIntervenant: this.nameIntervenant,
         surnameIntervenant: this.surnameIntervenant,
         isSigned: this.isSigned
       })
       .then(function (response) {

         // Fetch records
         app.allRecords();

         // Empty values
         app.date = "";
         app.nameDemandeur = "";
         app.surnameDemandeur = "";
         app.company = "";
         app.email = "";
         app.number = "";
         app.address = "";
         app.nameIntervenant = "";
         app.surnameIntervenant = "";
         app.isSigned = "";

         alert(response.data);
       })
       .catch(function (error) {
         console.log(error);
       });
     }else{
       alert('Fill all fields.');
     }

   },
   updateRecord: function(index,id){

     // Read value from Textbox
     var date = this.interventions[index].date;
     var nameDemandeur = this.interventions[index].nameDemandeur;
     var surnameDemandeur = this.interventions[index].surnameDemandeur;
     var company = this.interventions[index].company;
     var email = this.interventions[index].email;
     var number = this.interventions[index].number;
     var address = this.interventions[index].address;
     var nameIntervenant = this.interventions[index].nameIntervenant;
     var surnameIntervenant = this.interventions[index].surnameIntervenant;
     var isSigned = this.interventions[index].isSigned;


     if(date !='' && nameDemandeur !='' && surnameDemandeur !='' && company !='' && email !='' && number !=''
     && address !='' && nameIntervenant !='' && surnameIntervenant !='' && isSigned !=''){
       axios.post('ajaxfile.php', {
         request: 3,
         id: id,
         date: date,
         nameDemandeur: nameDemandeur,
         surnameDemandeur: surnameDemandeur,
         company: company,
         email: email,
         number: number,
         address: address ,
         nameIntervenant: nameIntervenant,
         surnameIntervenant: surnameIntervenant,
         isSigned: isSigned
       })
       .then(function (response) {
         alert(response.data);
       })
       .catch(function (error) {
         console.log(error);
       });
     }
   },
   deleteRecord: function(index,id){

     axios.post('ajaxfile.php', {
       request: 4,
       id: id
     })
     .then(function (response) {

       // Remove index from interventions
       app.interventions.splice(index, 1);
       alert(response.data);
     })
     .catch(function (error) {
       console.log(error);
     });

    }
  },
  created: function(){
    this.allRecords();
  }
})
