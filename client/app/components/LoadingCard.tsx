const LoadingCard = () => {
  return (
    <div className="h-screen my-32">
      <div className="border border-gray-700 shadow rounded-md p-4 max-w-sm w-screen mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-32 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
            <div className="flex justify-between">
              <div className="rounded-md bg-slate-700 h-10 w-20"></div>
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadingCardContainer = () => {
  return (
    <div className="h-screen flex justify-center flex-wrap gap-x-10">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
};

export default LoadingCardContainer;
