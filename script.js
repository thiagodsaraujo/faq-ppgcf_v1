
// FAQ Data
const faqData = [
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Processo Seletivo Regular", question: "Como funciona o processo seletivo regular?", answer: "O processo seletivo é a porta de entrada oficial para o programa, regido por um edital público que detalha todas as regras, datas e documentos necessários.", details: [{ icon: '📝', category: 'Categoria Principal: Processo Seletivo', points: ["Edital: É o documento mais importante, publicado com no mínimo 30 dias de antecedência. Define vagas, critérios, cronograma e documentação.", "Inscrição: Geralmente online, exige o preenchimento de formulários e o envio de documentos digitalizados.", "Fluxo Contínuo: O programa pode optar por um modelo de 'fluxo contínuo', permitindo inscrições em qualquer época do ano, conforme edital."] }], legalBasis: "Art. 79 (Normatização), Art. 81 (Fluxo Contínuo), Art. 87 (Comissão de Seleção), Art. 88 (Validade do Processo)", documentation: "Requerimento de inscrição, Formulário de inscrição, Cópia do diploma (ou declaração), Histórico escolar, Currículo Lattes, Comprovante de taxa.", deadlines: "Publicação do Edital: Mínimo 30 dias antes das inscrições. Recursos: Prazo definido no edital, com o Colegiado como primeira instância." },
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Matrícula Institucional", question: "Fui aprovado! Como faço a matrícula institucional?", answer: "A matrícula institucional é o ato que oficializa seu vínculo com a UEPB. Perder o prazo significa perder a vaga, mesmo tendo sido aprovado.", details: [{ icon: '🔗', category: 'Categoria Principal: Vínculo Acadêmico', points: ["Procedimento: Realizada na secretaria do programa, dentro do prazo estipulado no calendário acadêmico.", "Condição: É um pré-requisito para a primeira matrícula em disciplinas.", "Vedação: É proibido manter matrícula simultânea em mais de um curso de pós-graduação stricto sensu na UEPB."] }], legalBasis: "Art. 100 (Obrigatoriedade e Prazos), Art. 101 (Vedação de Matrícula Simultânea), Art. 102 (Diplomas Estrangeiros), Art. 103 (Matrícula Semestral)", documentation: "Documentos listados no edital de seleção (diploma, histórico, documentos pessoais, etc.).", deadlines: "Prazo definido no calendário escolar do programa. A não efetivação resulta em perda automática da vaga (Art. 100, §4º)." },
    { topic: "QUESTÕES FINANCEIRAS", subtopic: "Bolsas de Estudo", question: "Como funciona a concessão de bolsas de estudo?", answer: "As bolsas não são automáticas e dependem da disponibilidade de cotas das agências de fomento (como a CAPES). A seleção é baseada no mérito acadêmico.", details: [{ icon: '💰', category: 'Categoria Principal: Fomento e Auxílio', points: ["Comissão de Bolsas: Cada programa possui uma comissão responsável por definir os critérios de seleção e acompanhar os bolsistas.", "Critérios de Seleção: Priorizam o mérito acadêmico, geralmente baseado na classificação do processo seletivo.", "Renovação: A bolsa é concedida por 12 meses, renovável anualmente até o limite do curso, mediante bom desempenho."] }], legalBasis: "Art. 167 (Comissão de Bolsas), Art. 168 (Requisitos), Art. 169 (Renovação)", documentation: "Documentos que comprovem ausência de vínculo empregatício remunerado, Termo de compromisso da agência de fomento.", deadlines: "Seleção realizada pela Comissão de Bolsas após o resultado do processo seletivo de ingresso." },
    { topic: "VIDA ACADÊMICA", subtopic: "Créditos Mínimos", question: "Quantos créditos preciso para concluir o curso?", answer: "O programa exige um número mínimo de créditos em disciplinas, que devem ser integralizados dentro do prazo do curso.", details: [{ icon: '📊', category: 'Categoria Principal: Estrutura Curricular', points: ["Mestrado: Mínimo de 18 créditos.", "Doutorado: Mínimo de 27 créditos.", "Definição de Crédito: 1 crédito = 15h de aula teórica ou 30h de aula prática.", "Observação: Créditos da dissertação/tese não entram nesta contagem."] }], legalBasis: "Art. 115 (Limites Mínimos de Créditos)", documentation: "O controle é feito via histórico escolar.", deadlines: "Os créditos devem ser cumpridos dentro do prazo máximo do curso. O aluno e o orientador são responsáveis pelo planejamento." },
    { topic: "DEFESA E DIPLOMAÇÃO", subtopic: "Requisitos para Defesa", question: "O que preciso fazer para poder defender minha dissertação/tese?", answer: "Para marcar a defesa, é preciso ter cumprido uma série de requisitos acadêmicos e administrativos, formando um checklist obrigatório.", details: [{ icon: '🏁', category: 'Categoria Principal: Conclusão de Curso', points: ["Checklist: Créditos integralizados, aprovação na qualificação, proficiência em língua estrangeira, estágio docência cumprido, declaração de não plágio e recomendação do orientador."] }], legalBasis: "Art. 151 (Requisitos para a Defesa)", documentation: "Requerimento de agendamento, autorização do orientador, versão do trabalho para a banca, sugestão de nomes para a comissão, comprovantes de todos os requisitos.", deadlines: "O Colegiado tem até 30 dias para homologar a banca, e a defesa deve ser marcada em até 30 dias após a homologação." },
    { topic: "ORIENTAÇÃO", subtopic: "Definição e Troca de Orientador", question: "Como funciona a definição e a troca de orientador?", answer: "Todo aluno tem direito a um orientador, que é formalizado pelo Colegiado. A troca é possível, mas é um processo que requer acordo e aprovação.", details: [{ icon: '🤝', category: 'Categoria Principal: Relação Orientador-Orientando', points: ["Definição: Designado pelo Colegiado, com base na indicação do aluno e afinidade de pesquisa.", "Mudança pelo Aluno: O aluno pode solicitar a troca, com anuência do orientador atual e do novo.", "Conflito: Em caso de discordância, a decisão final sobre a troca cabe ao Colegiado."] }], legalBasis: "Art. 65 (Definição), Art. 66 (Mudança pelo Discente), Art. 32, inciso XXI (Atribuição do Colegiado)", documentation: "Para troca: Requerimento formal, justificativa, carta de anuência/aceite.", deadlines: "O Colegiado tem até 30 dias para designar um novo orientador em caso de vacância." }
];

// Quick access cards data
const quickAccessCards = [
    { icon: 'fas fa-user-plus', title: 'Ingresso', description: 'Processo seletivo, matrícula e admissão', topic: 'INGRESSO E ADMISSÃO' },
    { icon: 'fas fa-graduation-cap', title: 'Vida Acadêmica', description: 'Créditos, disciplinas e avaliações', topic: 'VIDA ACADÊMICA' },
    { icon: 'fas fa-money-bill-wave', title: 'Bolsas', description: 'Auxílios financeiros e dedicação', topic: 'QUESTÕES FINANCEIRAS' },
    { icon: 'fas fa-chalkboard-teacher', title: 'Orientação', description: 'Orientadores e relacionamento', topic: 'ORIENTAÇÃO' },
    { icon: 'fas fa-certificate', title: 'Defesa', description: 'Qualificação, defesa e diplomação', topic: 'DEFESA E DIPLOMAÇÃO' },
    { icon: 'fas fa-building', title: 'Governança', description: 'Estrutura e funcionamento', topic: 'ESTRUTURA E GOVERNANÇA' }
];

// Topic icons
const topicIcons = {
    "INGRESSO E ADMISSÃO": "fas fa-door-open",
    "ESTRUTURA E GOVERNANÇA": "fas fa-building",
    "CORPO DOCENTE": "fas fa-users",
    "QUESTÕES FINANCEIRAS": "fas fa-money-bill-wave",
    "VIDA ACADÊMICA": "fas fa-graduation-cap",
    "PRAZOS E SITUAÇÕES ESPECIAIS": "fas fa-clock",
    "ORIENTAÇÃO": "fas fa-chalkboard-teacher",
    "DEFESA E DIPLOMAÇÃO": "fas fa-certificate",
    "SITUAÇÕES PROBLEMÁTICAS": "fas fa-exclamation-triangle",
    "DIREITOS E GOVERNANÇA": "fas fa-balance-scale"
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const topicFilter = document.getElementById('topicFilter');
const subtopicFilter = document.getElementById('subtopicFilter');
const faqContainer = document.getElementById('faqContainer');
const noResults = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');
const quickCards = document.getElementById('quickCards');

// State
let currentResults = faqData;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateFilters();
    renderQuickAccessCards();
    renderFAQ(faqData);
    updateResultsCount(faqData.length);
    
    // Event listeners
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    topicFilter.addEventListener('change', handleFilter);
    subtopicFilter.addEventListener('change', handleFilter);
}

function populateFilters() {
    // Populate topic filter
    const topics = [...new Set(faqData.map(item => item.topic))].sort();
    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicFilter.appendChild(option);
    });

    // Populate subtopic filter
    const subtopics = [...new Set(faqData.map(item => item.subtopic))].sort();
    subtopics.forEach(subtopic => {
        const option = document.createElement('option');
        option.value = subtopic;
        option.textContent = subtopic;
        subtopicFilter.appendChild(option);
    });
}

function renderQuickAccessCards() {
    quickCards.innerHTML = quickAccessCards.map(card => `
        <div class="quick-card" onclick="filterByTopic('${card.topic}')">
            <div class="quick-card-icon">
                <i class="${card.icon}"></i>
            </div>
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        </div>
    `).join('');
}

function renderFAQ(items) {
    if (items.length === 0) {
        faqContainer.innerHTML = '';
        noResults.classList.add('show');
        return;
    }

    noResults.classList.remove('show');
    
    faqContainer.innerHTML = items.map((item, index) => `
        <div class="faq-item" id="faq-${index}">
            <div class="faq-header-item" onclick="toggleFAQ(${index})">
                <div class="faq-question-content">
                    <div class="faq-question">${item.question}</div>
                    <div class="faq-tags">
                        <span class="faq-tag topic">${item.topic}</span>
                        <span class="faq-tag subtopic">${item.subtopic}</span>
                    </div>
                </div>
                <i class="fas fa-chevron-down faq-chevron"></i>
            </div>
            <div class="faq-content">
                <div class="faq-answer">${item.answer}</div>
                <div class="faq-details">
                    ${renderDetails(item)}
                    ${renderInfoGrid(item)}
                </div>
            </div>
        </div>
    `).join('');
}

function renderDetails(item) {
    return item.details.map(detail => `
        <div class="detail-section">
            <div class="detail-icon">${detail.icon}</div>
            <div class="detail-category">${detail.category}</div>
            <ul class="detail-points">
                ${detail.points.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderInfoGrid(item) {
    return `
        <div class="info-grid">
            <div class="info-item">
                <i class="fas fa-book info-icon"></i>
                <div class="info-content">
                    <h5>Base Legal</h5>
                    <p>${item.legalBasis}</p>
                </div>
            </div>
            <div class="info-item">
                <i class="fas fa-file-alt info-icon"></i>
                <div class="info-content">
                    <h5>Documentação</h5>
                    <p>${item.documentation}</p>
                </div>
            </div>
            <div class="info-item">
                <i class="fas fa-clock info-icon"></i>
                <div class="info-content">
                    <h5>Prazos</h5>
                    <p>${item.deadlines}</p>
                </div>
            </div>
        </div>
    `;
}

function toggleFAQ(index) {
    const faqItem = document.getElementById(`faq-${index}`);
    faqItem.classList.toggle('active');
}

function handleSearch() {
    applyFilters();
}

function handleFilter() {
    applyFilters();
}

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedTopic = topicFilter.value;
    const selectedSubtopic = subtopicFilter.value;

    // Show/hide quick access cards based on search
    const quickAccessSection = document.querySelector('.quick-access');
    if (searchTerm) {
        quickAccessSection.classList.add('hidden');
    } else {
        quickAccessSection.classList.remove('hidden');
    }

    let filtered = faqData.filter(item => {
        // Topic filter
        if (selectedTopic && item.topic !== selectedTopic) return false;
        
        // Subtopic filter
        if (selectedSubtopic && item.subtopic !== selectedSubtopic) return false;
        
        // Search filter
        if (searchTerm) {
            const searchableText = [
                item.question,
                item.answer,
                item.topic,
                item.subtopic,
                item.legalBasis,
                item.documentation,
                item.deadlines,
                ...item.details.flatMap(d => [d.category, ...d.points])
            ].join(' ').toLowerCase();
            
            if (!searchableText.includes(searchTerm)) return false;
        }
        
        return true;
    });

    currentResults = filtered;
    renderFAQ(filtered);
    updateResultsCount(filtered.length);
    
    // Update subtopic filter based on selected topic
    if (selectedTopic) {
        updateSubtopicFilter(selectedTopic);
    } else {
        populateSubtopicFilter();
    }
}

function updateSubtopicFilter(selectedTopic) {
    const relevantSubtopics = [...new Set(
        faqData
            .filter(item => item.topic === selectedTopic)
            .map(item => item.subtopic)
    )].sort();
    
    const currentValue = subtopicFilter.value;
    subtopicFilter.innerHTML = '<option value="">Todos os Subtópicos</option>';
    
    relevantSubtopics.forEach(subtopic => {
        const option = document.createElement('option');
        option.value = subtopic;
        option.textContent = subtopic;
        if (subtopic === currentValue) option.selected = true;
        subtopicFilter.appendChild(option);
    });
}

function populateSubtopicFilter() {
    const subtopics = [...new Set(faqData.map(item => item.subtopic))].sort();
    const currentValue = subtopicFilter.value;
    subtopicFilter.innerHTML = '<option value="">Todos os Subtópicos</option>';
    
    subtopics.forEach(subtopic => {
        const option = document.createElement('option');
        option.value = subtopic;
        option.textContent = subtopic;
        if (subtopic === currentValue) option.selected = true;
        subtopicFilter.appendChild(option);
    });
}

function filterByTopic(topic) {
    topicFilter.value = topic;
    subtopicFilter.value = '';
    searchInput.value = '';
    applyFilters();
    
    // Scroll to FAQ section
    document.querySelector('.faq-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function updateResultsCount(count) {
    resultsCount.textContent = `${count} resultado${count !== 1 ? 's' : ''}`;
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});



// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open FAQ items
        document.querySelectorAll('.faq-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});
