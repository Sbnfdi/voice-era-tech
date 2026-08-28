'use client';

import { useState, useEffect, useRef } from 'react';

type CallState = 'idle' | 'calling' | 'connected' | 'ended';

const keys = [
  { digit: '1', sub: '' },
  { digit: '2', sub: 'ABC' },
  { digit: '3', sub: 'DEF' },
  { digit: '4', sub: 'GHI' },
  { digit: '5', sub: 'JKL' },
  { digit: '6', sub: 'MNO' },
  { digit: '7', sub: 'PQRS' },
  { digit: '8', sub: 'TUV' },
  { digit: '9', sub: 'WXYZ' },
  { digit: '*', sub: '' },
  { digit: '0', sub: '+' },
  { digit: '#', sub: '' },
];

export default function HeroDialer() {
  const [number, setNumber] = useState('1 (800) 555-0199');
  const [callState, setCallState] = useState<CallState>('idle');
  const [duration, setDuration] = useState(0);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (callState === 'connected') {
      timerRef.current = setInterval(() => {
        setDuration(d => d + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setDuration(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [callState]);

  const handleKeyPress = (digit: string) => {
    setActiveKey(digit);
    setTimeout(() => setActiveKey(null), 150);
    if (callState === 'idle') {
      if (number.length < 18) {
        setNumber(prev => (prev === '1 (800) 555-0199' ? digit : prev + digit));
      }
    }
  };

  const handleCall = () => {
    if (callState === 'idle') {
      setCallState('calling');
      setTimeout(() => {
        setCallState('connected');
      }, 1800);
    } else if (callState === 'connected' || callState === 'calling') {
      setCallState('ended');
      setTimeout(() => {
        setCallState('idle');
      }, 1500);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 380,
        background: '#151D27',
        border: '1px solid rgba(76, 141, 255, 0.18)',
        borderRadius: 24,
        padding: '1.75rem',
        boxShadow: '0 32px 80px rgba(0, 0, 0, 0.6), 0 0 30px rgba(49, 87, 213, 0.08)',
        position: 'relative',
      }}
    >
      {/* Top Status Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid rgba(76, 141, 255, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background:
                callState === 'connected'
                  ? '#3AAFA9'
                  : callState === 'calling'
                  ? '#4C8DFF'
                  : '#5E6A78',
              boxShadow: callState === 'connected' ? '0 0 8px #3AAFA9' : 'none',
            }}
          />
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.625rem',
              color: '#9AA6B2',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {callState === 'idle' && 'SIP Ready'}
            {callState === 'calling' && 'Routing Call...'}
            {callState === 'connected' && `Active • ${formatTime(duration)}`}
            {callState === 'ended' && 'Call Terminated'}
          </span>
        </div>

        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.5625rem',
            color: '#C9A96E',
            letterSpacing: '0.08em',
          }}
        >
          HD AUDIO 48kHz
        </span>
      </div>

      {/* Screen Display Panel */}
      <div
        style={{
          background: '#0B0F14',
          border: '1px solid rgba(76, 141, 255, 0.12)',
          borderRadius: 14,
          padding: '1.25rem',
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '1.375rem',
            fontWeight: 700,
            color: callState === 'connected' ? '#3AAFA9' : '#F4F6F8',
            letterSpacing: '0.04em',
            marginBottom: '0.35rem',
          }}
        >
          {number || 'Enter Number'}
        </div>

        {/* Live Audio Waveform */}
        {callState === 'connected' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              height: '18px',
              marginTop: '0.5rem',
            }}
          >
            {[40, 75, 30, 95, 60, 85, 45, 90, 65, 35, 80].map((h, i) => (
              <div
                key={i}
                style={{
                  width: 3,
                  height: `${h}%`,
                  borderRadius: 2,
                  background: '#3AAFA9',
                  animation: `pulseWave 0.8s ease-in-out infinite alternate ${i * 0.08}s`,
                }}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '0.6875rem',
              color: '#9AA6B2',
            }}
          >
            Predictive Outbound Line #01
          </div>
        )}
      </div>

      {/* 12-Key Physical Keypad Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.625rem',
          marginBottom: '1.5rem',
        }}
      >
        {keys.map(k => {
          const isPressed = activeKey === k.digit;
          return (
            <button
              key={k.digit}
              onClick={() => handleKeyPress(k.digit)}
              style={{
                background: isPressed ? '#3157D5' : '#202B38',
                border: `1px solid ${isPressed ? '#4C8DFF' : 'rgba(76, 141, 255, 0.12)'}`,
                borderRadius: 12,
                padding: '0.8125rem 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.12s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isPressed ? '0 0 12px rgba(76, 141, 255, 0.4)' : 'none',
              }}
              onMouseEnter={e => {
                if (!isPressed) {
                  (e.currentTarget as HTMLElement).style.background = '#283747';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(76, 141, 255, 0.25)';
                }
              }}
              onMouseLeave={e => {
                if (!isPressed) {
                  (e.currentTarget as HTMLElement).style.background = '#202B38';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(76, 141, 255, 0.12)';
                }
              }}
            >
              <span
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1875rem',
                  color: isPressed ? '#FFFFFF' : '#F4F6F8',
                  lineHeight: 1,
                  marginBottom: k.sub ? '2px' : '0',
                }}
              >
                {k.digit}
              </span>
              {k.sub && (
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.5rem',
                    color: isPressed ? '#F4F6F8' : '#9AA6B2',
                    letterSpacing: '0.1em',
                  }}
                >
                  {k.sub}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Action Controls */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '0.625rem' }}>
        <button
          onClick={() => setNumber('')}
          style={{
            background: '#202B38',
            border: '1px solid rgba(76, 141, 255, 0.12)',
            borderRadius: 12,
            color: '#9AA6B2',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.75rem',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.color = '#F4F6F8';
            (e.currentTarget as HTMLElement).style.background = '#283747';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.color = '#9AA6B2';
            (e.currentTarget as HTMLElement).style.background = '#202B38';
          }}
        >
          Clear
        </button>

        <button
          onClick={handleCall}
          style={{
            background:
              callState === 'connected' || callState === 'calling'
                ? '#D94848'
                : '#3157D5',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 12,
            padding: '0.875rem',
            color: '#FFFFFF',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 700,
            fontSize: '0.9375rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            boxShadow:
              callState === 'connected' || callState === 'calling'
                ? '0 4px 16px rgba(217, 72, 72, 0.35)'
                : '0 4px 16px rgba(49, 87, 213, 0.35)',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {callState === 'idle' && 'Launch Outbound Dial →'}
          {callState === 'calling' && 'Connecting... Cancel'}
          {callState === 'connected' && 'End Connection'}
          {callState === 'ended' && 'Call Concluded'}
        </button>
      </div>

      <style>{`
        @keyframes pulseWave {
          0% { transform: scaleY(0.3); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
