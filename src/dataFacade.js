const URL = "http://localhost:3456/api";

class DataFacade {
  
  constructor(){
     this._persons = [];
     this.getPersons();
  }

  getPersons = (cached) => {
    if(cached){
      if(this.handler){
        this.handler(this._persons);
      }
    }
    fetch(URL)
      .then(function (res) {
        return res.json();
      }).then((data) => {
        let persons = data;
        this._persons = data;
        if (this.handler) {
          this.handler(persons);
        };
      });
  }

  addPerson = (data) => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const init = {
          method: 'POST',
          headers:myHeaders,
          body: JSON.stringify(data)
      };

      fetch(URL,init)
          .then(function (res) {
              return res.json();
          }).then((data) => {
          let person = data;
          this._persons = this._persons.concat([person]);
          if (this.handler) {
              this.handler([person]);
          };
      });
  }

  setPersonsObserver(handler) {
    this.handler = handler;
  }

}

export default new DataFacade();