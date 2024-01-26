const conversationElement = document.getElementById('conversation');
const messagesContainer = document.querySelector('.conversation');

const messages = [
    { text: "Hello, esteemed Associate Vice President of Undergraduate Admission! ✨ I am thrilled to inform you that I have discovered an exceptional student, just as you requested. I couldn't contain my excitement when I came across this promising applicant. They truly warrant your immediate attention.", speaker: "bobcat" },

    { text: "Ah, my esteemed colleague! 🌟 Your discovery intrigues me. Tell me more about this magical find among our realm of applicants .", speaker: "associatevp" },

    { text: "His name is Mr. Sanil Dulal, a shining star in the parallel universe. His skills gleam like the stars in a magical night sky, and his unique qualities are an enchantment waiting to unfold, a wizard in the making.", speaker: "bobcat" },

    { text: "Mr. Sanil, you say? Describe the hues of magic that adorn his potential. What makes him the chosen one?", speaker: "associatevp" },

    { text: "Despite hard times, lack of support, and limited resources, this applicant has stood still. Not only that, but this applicant is also a brilliant wizard and an extraordinary individual. This applicant has caught my discerning eye, and NYU is his top-choice school.", speaker: "bobcat" },

    { text: "But Bobcat, this is not enough to be the chosen one. I asked you to find that amazing applicant who truly belongs to NYU. Upon seeing his file, he really does not have good academics. Bobcat, my friend, I think you made a mistake this time. What made you choose this applicant?", speaker: "associatevp" },

    { text: "(smiles) Dear associate vp, I have not made any mistake. Even when I came across his application file, I thought the same. But sometimes, a person is much more than what they have on the paper. Mr. Sanil's life has been so much different and better after those terrible grades. He has become a better person and, yes, a more skillful one.", speaker: "bobcat" },

    { text: "This applicant, a diligent and resilient individual, didn't let challenging times deter him. Despite not boasting the highest grades, he worked tirelessly, teaching himself different programming languages, various cybersecurity topics, developing security tools,engaging in research or educating people. He has been doing a lot more with the limited resources he has.", speaker: "bobcat" },

    { text: "I understand this, but bobcat, can he survive the rigorous academic curriculum at this institution?", speaker: "associatevp" },

    { text: "Rest assured, esteemed associate vp. Despite his grades, Mr. Sanil possesses a resilient and adaptable magic. He is a self-taught individual, mastering programming languages and cybersecurity topics with no external guidance. He is also the founder of Zeroforetell, a startup in zero-day vulnerability, he excels in this sensitive field. ", speaker: "bobcat" },

    { text: "Their magical prowess extends far beyond the classroom. Coming from a background with limited resources, everything seemingly against him, Mr. Sanil's determination prevailed. Mr. Sanil's knowledge and hardworking nature make him well-equipped to handle our rigorous course curriculum. You need not worry about their ability to navigate our rigorous academic realm.", speaker: "bobcat" },

    { text: "Bobcat, what other qualities make him the chosen one? Are there hidden gems in his file that I may have overlooked?", speaker: "associatevp" },

    { text: "Certainly, esteemed Dean. Mr. Sanil stands out not just for his academic brilliance but also for being a kind and supportive friend in our community. His extraordinary ability to bring warmth and help to others is truly remarkable. Often unnoticed on paper, his positive spirit and friendly nature make him a bright presence in our enchanted academic world.", speaker: "bobcat"},

    { text: "Dear associate vice president, at NYU, we unearth dreams from forgotten pages, turning ordinary narratives into bestselling tales. This unique essence drew Mr. Sanil to choose NYU as his first choice, amidst over 5000 magical schools.", speaker: "bobcat" },

    { text: "Despite teaching himself many things, he has encountered numerous challenges, with a significant one being a lack of resources and guidance on diverse topics. This is precisely why Sanil wants to be a part of our community. At NYU, we strive to be the shelter for those struggling in the rain. It is the beauty that defines NYU, and we should give shelter to individuals like Mr Sanil.", speaker: "bobcat" },

    { text: "You are right bobcat. Let me discuss this with the Headmaster (President), and I will let you know what he thinks.", speaker: "associatevp" },

    { text: "Dear Bobcat, well done! The Headmaster is also genuinely impressed with this applicant, and we truly feel he is the chosen one for the class of 2028. He belongs to this community, and we are committed to helping him achieve great things. I will instruct the admission team to go through his file now and accept him for the class of 2028. Good work, Bobcat!", speaker: "associatevp" },


    { text: "Dear associate vp, thank you for your kind words!, in granting Mr. Sanil this opportunity, we believe in the transformative power of one chance. Indeed, he deserves this chance to weave his own magical tale within the enchanted halls of NYU. Thank you for recognizing his potential and affording him the opportunity to shine in the class of 2028.", speaker: "bobcat" },

    { text: "Bobcat, your dedication to discovering and advocating for exceptional talent is truly commendable. As we welcome Mr. Sanil to the class of 2028, we embrace the belief in the magic of unique opportunities. Together, let's embark on a journey of limitless possibilities.", speaker: "associatevp" },
];



const htmlLinkMessage = {
    text: 'Also, before you disappear into the mundane, check out this short clip of magic <a href="ending.html" id="ending.html">here</a>. Only takes a moment!',
    speaker: 'magic'
};


messages.push(htmlLinkMessage);

let index = 0;

function displayMessage() {
    if (index < messages.length) {
        const message = messages[index];

        if (message.speaker === "bobcat" || message.speaker === "associatevp") {
            showMessageWithTyping(message);
        } else {
            showMessage(message);
        }
    }
}

function showMessage(message) {
    const messageContainer = createMessageElement(message);
    messagesContainer.appendChild(messageContainer);

    animateMessages();

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
        index++;
        displayMessage();
    }, 12000);
}

function showMessageWithTyping(message) {
    const messageContainer = createMessageElement(message);
    messagesContainer.appendChild(messageContainer);

    animateMessages();

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
        simulateTyping(() => {
            setTimeout(() => {
                index++;
                displayMessage();
            }, 2000);
        });
    }, 2000);
}

function animateMessages() {
    const messageContainers = document.querySelectorAll('.message-container');
    messageContainers.forEach((container, index) => {
        container.style.transition = 'transform 0.5s';
        container.style.transform = `translateY(0)`;
    });
}

function simulateTyping(callback) {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    typingIndicator.textContent = 'typing...';

    messagesContainer.appendChild(typingIndicator);

    setTimeout(() => {
        typingIndicator.remove();
        callback();
    }, 10000);
}

function createMessageElement(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    const avatar = document.createElement('div');
    avatar.classList.add('avatar', message.speaker === 'bobcat' ? 'sent' : 'received');
    avatar.id = message.speaker + '-avatar';

    const textContainer = document.createElement('div');
    textContainer.classList.add('message-text');

    const nameElement = document.createElement('div');
    nameElement.classList.add('message-name');
    nameElement.textContent = message.speaker === 'bobcat' ? 'Bobcat' : 'Associate VP';

    const messageTextElement = document.createElement('div');
    messageTextElement.innerHTML = message.text; 

    const timestampElement = document.createElement('div');
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timestampElement.classList.add('message-timestamp');
    timestampElement.textContent = timestamp;

    textContainer.appendChild(nameElement);
    textContainer.appendChild(messageTextElement);
    textContainer.appendChild(timestampElement);

    messageElement.appendChild(avatar);
    messageElement.appendChild(textContainer);

    return messageElement;
}

function redirectToHtmlFile() {
    window.location.href = 'ending.html';
}


if (index === messages.length - 1 && messages[index].speaker === 'system') {
    const redirectLink = document.getElementById('redirectLink');
    if (redirectLink) {
        redirectLink.addEventListener('click', redirectToHtmlFile);
    }
}

displayMessage();