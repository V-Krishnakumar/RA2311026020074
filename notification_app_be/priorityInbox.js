const notifications = [
    { id: 1, type: "Placement", message: "Company Hiring", minutesAgo: 2 },
    { id: 2, type: "Result", message: "Mid Sem Result", minutesAgo: 5 },
    { id: 3, type: "Event", message: "Tech Fest", minutesAgo: 1 },
    { id: 4, type: "Placement", message: "Interview Drive", minutesAgo: 7 },
    { id: 5, type: "Result", message: "Project Review", minutesAgo: 3 },
    { id: 6, type: "Event", message: "Farewell", minutesAgo: 6 },
    { id: 7, type: "Placement", message: "Internship Alert", minutesAgo: 4 },
    { id: 8, type: "Result", message: "Quiz Marks", minutesAgo: 8 },
    { id: 9, type: "Event", message: "Workshop", minutesAgo: 2 },
    { id: 10, type: "Placement", message: "Mass Recruiter", minutesAgo: 9 },
    { id: 11, type: "Placement", message: "Startup Hiring", minutesAgo: 1 }
];

function getWeight(type) {
    if (type === "Placement") return 3;
    if (type === "Result") return 2;
    return 1;
}

function getScore(notification) {
    return getWeight(notification.type) * 100 - notification.minutesAgo;
}

function getTop10(data) {
    return data
        .map(item => ({
            ...item,
            score: getScore(item)
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
}

const top10 = getTop10(notifications);

console.log("Top 10 Priority Notifications:\n");

top10.forEach((item, index) => {
    console.log(
        `${index + 1}. ${item.type} | ${item.message} | Score: ${item.score}`
    );
});