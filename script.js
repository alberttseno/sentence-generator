document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const results = document.getElementById('results');

    const sampleSentences = {
        "past tense": [
            "I went to the store yesterday.",
            "She watched a movie last night."
        ],
        "present tense": [
            "I am reading a book.",
            "He goes to school every day."
        ],
        "future tense": [
            "I will go to the gym tomorrow.",
            "They are going to visit Paris next month."
        ],
        "conditional": [
            "If it rains, we will stay inside.",
            "She would travel if she had more time."
        ],
        "passive voice": [
            "The cake was eaten by the children.",
            "The project will be completed by next week."
        ]
    };

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        results.innerHTML = '';

        if (sampleSentences[query]) {
            const sentences = sampleSentences[query];
            sentences.forEach(sentence => {
                const p = document.createElement('p');
                p.textContent = sentence;
                results.appendChild(p);
            });
        } else {
            results.textContent = 'No sample sentences found.';
        }
    });
});
