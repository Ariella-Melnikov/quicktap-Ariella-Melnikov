# QuickTap - Reaction Time Game

A fast-paced reaction time game built with React, TypeScript, and modern web technologies. Test your reflexes by responding to visual cues as quickly as possible!

## 🎮 Project Overview

QuickTap challenges players to react quickly to visual markers appearing on screen. Press the correct key (A for left, D for right) when the marker appears to score points. The game tests reflexes and hand-eye coordination while providing a fun, competitive experience.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Ariella-Melnikov/quicktap-Ariella-Melnikov
cd quicktap-Ariella-Melnikov
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173/](http://localhost:5173/) in your browser

## 📁 Project Structure

```
quicktap/
├── src/
│   ├── assets/
│   │   ├── icons/         # SVG icons and images
│   │   ├── img/          # Image assets
│   │   └── styles/       # Global styles and abstracts
│   ├── components/
│   │   ├── AppHeader/    # App header component
│   │   ├── StoryBoard/   # Main game board component
│   │   └── buttons/      # Reusable button components
│   ├── pages/
│   │   ├── GamePage/     # Main game screen
│   │   ├── SigninPage/   # User authentication
│   │   ├── GameOverPage/ # Game end screen
│   │   └── LeaderboardPage/ # High scores display
│   └── services/         # API and backend services
```

## 🎯 Features

- **Quick Reaction Gameplay**: Test your reflexes with randomized visual cues
- **Leaderboard**: Compare your scores with other players
- **Visual Feedback**: Clear feedback for correct and incorrect responses


## 🔄 Game Flow

1. Sign in with username
2. Wait for the marker to appear
3. Press correct key (A or D) when marker shows
4. Get feedback on your reaction
5. End game by clicking the end game button. 
6. View final score and compare on leaderboard

## Extra Implemented Features

- [X] Created an exit button to avoid player and QA frustration. 


## 📝 Todo / Future Improvements

### Gameplay
- [ ] Add difficulty levels (adjust timing windows)
- [ ] Implement combo system for consecutive correct responses
- [ ] Add sound effects and background music
- [ ] Create practice mode with instant feedback

### UI/UX
- [ ] Add animations for score changes
- [ ] Implement dark mode theme
- [ ] Add visual tutorial for new players
- [ ] Add Responsive Design

### Technical
- [ ] Add unit tests
- [ ] Dockerize application
- [ ] Code reuse could have been done better

### Features
- [ ] Implement daily challenges
- [ ] Add multiplayer mode
- [ ] Create achievement system

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



