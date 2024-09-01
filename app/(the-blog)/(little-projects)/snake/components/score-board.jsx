export const ScoreBoard = () => {
  return (
    <div className="w-[400px] mt-10 border-yellow-300 border justify-center items-center p-4">
      <h1 className=" text-3xl mb-4 text-center titre">TOP 10 DES SCORES</h1>
      <div id="score1" className="flex flex-row justify-between text-xl">
        <div>joueur</div>
        <div className="font-bold">score</div>
      </div>
    </div>
  );
};
