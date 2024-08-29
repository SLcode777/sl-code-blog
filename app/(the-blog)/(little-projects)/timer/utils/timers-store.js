import { create } from "zustand";

const useTimersStore = create((set, get) => ({
  timers: [],
  duration: { hours: 0, minutes: 0, seconds: 0 },
  durationInSeconds: 0,
  initialDuration: { hours: 0, minutes: 0, seconds: 0 },

  setHours: (hours) => {
    set((state) => ({ duration: { ...state.duration, hours } }));
  },

  setMinutes: (minutes) => {
    set((state) => ({ duration: { ...state.duration, minutes } }));
  },

  setSeconds: (seconds) => {
    set((state) => ({ duration: { ...state.duration, seconds } }));
  },

  setDurationInSeconds: (duration) => {
    const totalSeconds =
      duration.hours * 3600 + duration.minutes * 60 + duration.seconds;
    set(() => ({
      durationInSeconds: totalSeconds,
    }));
  },

  setTimerName: (id, newname) => {
    set((state) => ({
      timers: state.timers.map((timer) =>
        timer.id === id ? { ...timer, name: newname } : timer
      ),
    }));
  },

  addTimer: (timer) => {
    set((state) => ({
      timers: [...state.timers, { ...timer, initialDuration: timer.duration }],
    }));
  },

  updateTimer: (id, newTime) => {
    set((state) => ({
      timers: state.timers.map((timer) =>
        timer.id === id ? { ...timer, duration: newTime } : timer
      ),
    }));
  },

  tickTimers: (id) => {
    set((state) => ({
      timers: state.timers.map((timer) => {
        if (timer.id === id) {
          const newDuration = timer.duration - 1;
          if (newDuration <= 0) {
            return { ...timer, duration: 0, isRunning: false };
          }
          return { ...timer, duration: newDuration };
        }
        return timer;
      }),
    }));
  },

  removeTimer: (timer) => {
    set((state) => ({
      timers: state.timers.filter((t) => t !== timer),
    }));
  },

  pauseTimer: (id) => {
    set((state) => ({
      timers: state.timers.map((timer) =>
        timer.id === id ? { ...timer, isRunning: false } : timer
      ),
    }));
  },

  resumeTimer: (id) => {
    set((state) => ({
      timers: state.timers.map((timer) =>
        timer.id === id ? { ...timer, isRunning: true } : timer
      ),
    }));
  },

  resetTimer: (id) => {
    set((state) => ({
      timers: state.timers.map((timer) =>
        timer.id === id
          ? { ...timer, duration: timer.initialDuration, isRunning: true }
          : timer
      ),
    }));
  },
}));

export default useTimersStore;
