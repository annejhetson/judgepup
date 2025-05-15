import { useState } from 'react';

const questions = [
  'You hype your pup up for a car‑ride adventure… and pull into the vet’s parking lot. What level of betrayal stares back at you?',
  'You shout “Who wants a treat?”—then reveal it’s actually a toothbrush and minty dog toothpaste. How savage is the stare‑down?',
  'You open the back door like it’s play‑time paradise, only to herd your dog straight into a foamy bath. How sudsy is the betrayal rating?',
  'You pack the squeaky ball and leash for “the park,” but drive to the groomer for a nail‑trim marathon instead. What level of paw‑found disapproval do you earn?',
  'You cue the happiest “walkies!” voice, step onto the sidewalk… and whip out your phone for a 47‑photo holiday costume shoot. How epic is the judgment glare?',
];

export default function Question() {
  const getRandom = () =>
    questions[Math.floor(Math.random() * questions.length)];

  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>{getRandom()}</h2>
    </div>
  );
}
