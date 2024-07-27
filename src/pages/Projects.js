import React from 'react';

function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <div className="project">
                <h3>TicTacToe Game</h3>
                <p>A simple tic-tac-toe game that can be played with a friend.</p>
                <p>This project was my introduction to mobile app development<br /> in Android Studio and using the Google Ad API.</p>
                <a href="https://play.google.com/store/apps/details?id=com.lucaspiboy.tictactoepart2" target="_blank">View Project</a>
            </div>
            <div className="project">
                <h3>Color Tile Game</h3>
                <p>Another simple game centered around distinguishing color shades.</p>
                <p>This is another game I built in Android Studio to practice mobile app development.<br /> It is a re-make of a class project from my freshman year of high school.</p>
                <a href="#">View Project</a> {/* Replace "#" with the actual project URL */}
            </div>
            <div className="project">
                <h3>Project 3 Title</h3>
                <p>Description of Project 3</p>
                <p>Additional details about Project 3</p>
                <a href="#">View Project</a> {/* Replace "#" with the actual project URL */}
                <a href="#">GitHub Repository</a> {/* Replace "#" with the actual GitHub repository URL */}
            </div>
        </div>
    );
}

export default Projects;
