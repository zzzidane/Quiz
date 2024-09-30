function calculateScore() {
    let score = 0;
    
    // Réponses correctes
    const correctAnswers = {
      q1: 'Paris',
      q2: 'CSS'
    };
  
    // Récupérer les réponses sélectionnées
    const form = document.forms['quiz-form'];
    const q1Answer = form['q1'].value;
    const q2Answer = form['q2'].value;
  
    // Comparer les réponses avec les bonnes réponses
    if (q1Answer === correctAnswers.q1) {
      score++;
    }
    if (q2Answer === correctAnswers.q2) {
      score++;
    }
  
    // Afficher le score en utilisant une alerte
    alert(`Votre score est de ${score}/2`);
  }
  