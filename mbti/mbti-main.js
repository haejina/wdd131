const mbtiDetails = {
    INTJ: {
      title: "INTJ: The Architect",
      description: "Imaginative and strategic thinkers, with a plan for everything.",
      image: "https://www.16personalities.com/static/images/social/intj.png?v=1",
      moreInfo: "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement, whether at work, at home, or in themselves."
    },
    INTP: {
      title: "INTP: The Thinker",
      description: "Innovative inventors with an unquenchable thirst for knowledge.",
      image: "https://www.16personalities.com/static/images/social/intp.png?v=1",
      moreInfo: "INTPs are known for their brilliant theories and unrelenting logic. They are driven by the desire to understand the world and solve complex problems."
    },
    ENTJ: {
      title: "ENTJ: The Commander",
      description: "Bold, imaginative and strong-willed leaders, always finding a way – or making one.",
      image: "https://www.16personalities.com/static/images/social/entj.png?v=1",
      moreInfo: "ENTJs are natural-born leaders. They are confident and charismatic, and they enjoy taking charge and making things happen."
    },
    ENTP: {
      title: "ENTP: The Debater",
      description: "Smart and curious thinkers who cannot resist an intellectual challenge.",
      image: "https://www.16personalities.com/static/images/social/entp.png?v=1",
      moreInfo: "ENTPs are known for their quick wit and love of debate. They enjoy challenging others' ideas and being challenged in return."
    },
    INFJ: {
      title: "INFJ: The Advocate",
      description: "Quiet and mystical, yet very inspiring and tireless idealists.",
      image: "https://www.16personalities.com/static/images/social/infj.png?v=1",
      moreInfo: "INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential. They are intense and passionate."
    },
    INFP: {
      title: "INFP: The Mediator",
      description: "Poetic, kind and altruistic people, always eager to help a good cause.",
      image: "https://www.16personalities.com/static/images/social/infp.png?v=1",
      moreInfo: "INFPs are introspective and idealistic. They have a strong sense of their own values and seek to live in accordance with them."
    },
    ENFJ: {
      title: "ENFJ: The Protagonist",
      description: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
      image: "https://www.16personalities.com/static/images/social/enfj.png?v=1",
      moreInfo: "ENFJs are natural-born leaders, full of passion and charisma. They are confident and assertive, but also compassionate and empathetic."
    },
    ENFP: {
      title: "ENFP: The Campaigner",
      description: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
      image: "https://www.16personalities.com/static/images/social/enfp.png?v=1",
      moreInfo: "ENFPs are enthusiastic and creative. They are always looking for new possibilities and enjoy exploring new ideas and experiences."
    },
    ISTJ: {
      title: "ISTJ: The Logistician",
      description: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
      image: "https://www.16personalities.com/static/images/social/istj.png?v=1",
      moreInfo: "ISTJs are responsible and dependable. They value tradition and order, and they work hard to meet their obligations."
    },
    ISFJ: {
      title: "ISFJ: The Defender",
      description: "Very dedicated and warm protectors, always ready to defend their loved ones.",
      image: "https://www.16personalities.com/static/animations/type-descriptions/introductions/defender.svg?v=2",
      moreInfo: "ISFJs are warm and nurturing. They are deeply committed to their relationships and are always willing to go the extra mile to help others."
    },
    ESTJ: {
      title: "ESTJ: The Executive",
      description: "Excellent administrators, unsurpassed at managing things – or people.",
      image: "https://www.16personalities.com/static/images/social/estj.png?v=1",
      moreInfo: "ESTJs are organized and efficient. They have a clear vision of how things should be and work tirelessly to achieve their goals."
    },
    ESFJ: {
      title: "ESFJ: The Consul",
      description: "Extraordinarily caring, social and popular people, always eager to help.",
      image: "https://www.16personalities.com/static/images/social/esfj.png?v=1",
      moreInfo: "ESFJs are warm and caring. They enjoy helping others and are always willing to lend a hand."
    },
    ISTP: {
      title: "ISTP: The Virtuoso",
      description: "Bold and practical experimenters, masters of all kinds of tools.",
      image: "https://www.16personalities.com/static/images/social/istp.png?v=1",
      moreInfo: "ISTPs are hands-on and practical. They enjoy working with their hands and are skilled at solving mechanical problems."
    },
    ISFP: {
      title: "ISFP: The Adventurer",
      description: "Flexible and charming artists, always ready to explore and experience something new.",
      image: "https://www.16personalities.com/static/images/social/isfp.png?v=1",
      moreInfo: "ISFPs are sensitive and artistic. They enjoy exploring new experiences and are always open to new ideas."
    },
    ESTP: {
      title: "ESTP: The Entrepreneur",
      description: "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
      image: "https://www.16personalities.com/static/images/social/estp.png?v=1",
      moreInfo: "ESTPs are energetic and adventurous. They enjoy taking risks and are always looking for the next big thrill."
    },
    ESFP: {
      title: "ESFP: The Entertainer",
      description: "Spontaneous, energetic and enthusiastic people – life is never boring around them.",
      image: "https://www.16personalities.com/static/images/social/esfp.png?v=1",
      moreInfo: "ESFPs are fun-loving and enthusiastic. They enjoy being the center of attention and are always up for a good time."
    }
  };
  
  function showMbtiDetails(type) {
    const detailsSection = document.getElementById('mbti-details');
    const details = mbtiDetails[type];
  
    // Toggle display of details section
    if (detailsSection.style.display === 'block' && detailsSection.getAttribute('data-type') === type) {
      detailsSection.style.display = 'none';
      detailsSection.removeAttribute('data-type');
    } else {
      detailsSection.innerHTML = `
        <h2>${details.title}</h2>
        <img src="${details.image}" alt="${type}">
        <p>${details.description}</p>
        <p>${details.moreInfo}</p>
      `;
      detailsSection.style.display = 'block';
      detailsSection.setAttribute('data-type', type);
    }
  }