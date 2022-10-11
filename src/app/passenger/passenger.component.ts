import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  constructor() { }

passData={"totalPassengers":2136,"totalPages":72,"data":[{"_id":"63333ad3938c6d6ab7c9e379","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63333ad6938c6d1299c9e37c","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63333ade938c6ddbc5c9e37f","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"633341b5938c6d6518c9e747","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63334887938c6d7a3ec9eb4d","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63334906938c6db515c9eb6b","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6333499b938c6dc03cc9ebde","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63334d24938c6d6c43c9ed45","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"633354c2938c6db805c9eef0","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"633354c4938c6d2de0c9eef5","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"633356d4938c6d1eafc9ef68","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"633359d1938c6d20d6c9f02a","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6333606a938c6d32bcc9f085","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6333606b938c6dd2a4c9f088","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63336081938c6d34d9c9f08b","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6333628b938c6d3d4bc9f095","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"63337bb6938c6d7954c9f0ff","name":"Troy Hilll","trips":547,"airline":[{"id":1,"name":"Quatar Airways","country":"Quatar","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png","slogan":"Going Places Together","head_quaters":"Qatar Airways Towers, Doha, Qatar","website":"www.qatarairways.com","established":"1994"}],"__v":0},{"_id":"63337ff4938c6d7b93c9f11b","name":"Rosalie Hudson","trips":472,"airline":[{"id":1,"name":"Quatar Airways","country":"Quatar","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png","slogan":"Going Places Together","head_quaters":"Qatar Airways Towers, Doha, Qatar","website":"www.qatarairways.com","established":"1994"}],"__v":0},{"_id":"6333825a938c6d1ddac9f127","name":"Luther Bernhard","trips":272,"airline":[{"id":1,"name":"Quatar Airways","country":"Quatar","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png","slogan":"Going Places Together","head_quaters":"Qatar Airways Towers, Doha, Qatar","website":"www.qatarairways.com","established":"1994"}],"__v":0},{"_id":"633398eb4f78b85856e6c0e9","name":"Kelly Schuster","trips":760,"airline":[{"id":1,"name":"Quatar Airways","country":"Quatar","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png","slogan":"Going Places Together","head_quaters":"Qatar Airways Towers, Doha, Qatar","website":"www.qatarairways.com","established":"1994"}],"__v":0},{"_id":"6333a5264f78b838e8e6c127","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6333a6a24f78b83b0de6c12c","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6333a8704f78b8752ee6c131","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6333a95b4f78b88cfde6c134","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6333a9bc4f78b86495e6c137","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6333b3a04f78b855ffe6c1e7","name":"Jatin Sharma NNN","trips":456,"airline":[{"_id":"6333b39c4f78b828ade6c1e3","id":34567,"name":"BBAR Test Airways","country":"BBAR","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png","slogan":"From BBAR","head_quaters":"BBAR, BBRR","website":"www.bbarairways.com","established":"1988","__v":0}],"__v":0},{"_id":"6333b52d4f78b8e86be6c200","name":"Jatin Sharma NNN","trips":456,"airline":[{"_id":"6333b5284f78b85ee1e6c1fc","id":89002,"name":"HULK Test Airways","country":"HULK","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png","slogan":"From HULK","head_quaters":"HULK, HULK","website":"www.hulkairways.com","established":"2011","__v":0}],"__v":0},{"_id":"6333befb4f78b8aeede6c239","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6333e1ba4f78b88a48e6c6bf","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0},{"_id":"6333e1be4f78b86beae6c6c2","name":"John Doe","trips":250,"airline":[{"id":5,"name":"Eva Air","country":"Taiwan","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png","slogan":"Sharing the World, Flying Together","head_quaters":"376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan","website":"www.evaair.com","established":"1989"}],"__v":0}]}
  ngOnInit(): void {
  }

}
