import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-gen',
  templateUrl: './pass-gen.component.html',
  styleUrls: ['./pass-gen.component.scss']
})
export class PassGenComponent implements OnInit {

  charCount: number = 8;
  includeAlphabet: boolean = true;
  includeNumbers: boolean = false;
  includeSpecialChars: boolean = false;
  generatedPassword: string = '';

  ngOnInit(): void {
    this.generatePassword();
  }

  copyPassword(): void {
    navigator.clipboard.writeText(this.generatedPassword)
  }

  generatePassword(): void {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (this.includeAlphabet) chars += alphabet;
    if (this.includeNumbers) chars += numbers;
    if (this.includeSpecialChars) chars += specialChars;


    let password = '';
    for (let i = 0; i < this.charCount; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    this.generatedPassword = password;
  }

}
