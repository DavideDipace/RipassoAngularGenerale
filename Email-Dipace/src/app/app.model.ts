export class Email {
    mail: string;
    oggetto: string;
    contenuto: string;
  
    constructor(mail: string, oggetto: string, contenuto: string) {
      this.mail = mail;
      this.oggetto = oggetto;
      this.contenuto = contenuto;
    }

}