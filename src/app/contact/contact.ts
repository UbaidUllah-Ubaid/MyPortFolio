import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'] // Agar CSS hai toh .css karein
})
export class Contact {
  // Developer Details
  developerName = 'Ubaid Ullah';
  developerRole = 'Frontend Web Developer';
  emailAddress = 'ubaid.developer@example.com'; // Apna email yahan daalein

  // Social Links
  socialLinks = {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    whatsapp: 'https://wa.me/923000000000', // Apna WhatsApp number
    facebook: 'https://facebook.com/your-username'
  };

  // Form Data Object (Two-Way Binding)
  
  name = '';
  email =  '';
  subject =  '';
  message =  '';

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  showButton = false;
  generatedBox = false;


submitForm() {

  console.log(this.name);

   this.formData = {
    name: this.name,
    email: this.email,
    subject: this.subject,
    message: this.message
  };

  this.showButton = true;
  this.generatedBox = true;
  
  }


  sendMsgWhatsapp() {
    const message = `Hello, my name is ${this.formData.name} and my email is ${this.formData.email}.
I would like to discuss a project with you help me in that ${this.formData.message}.
Please let me know if you are available to discuss this further.
Thanks you...`;

return message;
  }

  sendMessage() {
  const message = this.sendMsgWhatsapp();

  const whatsappMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/923197272924?text=${whatsappMessage}`;

  window.open(whatsappUrl, '_blank');

  console.log(whatsappUrl);
}

}


