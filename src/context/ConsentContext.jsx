"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ConsentContext = createContext({
  consentGiven: false,
  consentStatus: null, // null | 'accepted' | 'rejected'
  isBannerOpen: false,
  openBanner: () => {},
  closeBanner: () => {},
  acceptConsent: () => {},
  rejectConsent: () => {},
  resetConsent: () => {},
  isLoaded: false,
});

export const CONSENT_STORAGE_KEY = 'ruephone_cookie_consent';

export function ConsentProvider({ children }) {
  const [consentStatus, setConsentStatus] = useState(null);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (saved === 'accepted' || saved === 'rejected') {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setConsentStatus(saved);
        setIsBannerOpen(false);
      } else {
        // First visit: no preference saved yet, display consent banner
        setIsBannerOpen(true);
      }
    } catch (err) {
      console.warn('LocalStorage error reading consent:', err);
      setIsBannerOpen(true);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const acceptConsent = useCallback(() => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    } catch (err) {
      console.warn('LocalStorage error saving consent:', err);
    }
    setConsentStatus('accepted');
    setIsBannerOpen(false);
  }, []);

  const rejectConsent = useCallback(() => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, 'rejected');
    } catch (err) {
      console.warn('LocalStorage error saving consent:', err);
    }
    setConsentStatus('rejected');
    setIsBannerOpen(false);
  }, []);

  const resetConsent = useCallback(() => {
    try {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
    } catch (err) {
      console.warn('LocalStorage error removing consent:', err);
    }
    setConsentStatus(null);
    setIsBannerOpen(true);
  }, []);

  const openBanner = useCallback(() => {
    setIsBannerOpen(true);
  }, []);

  const closeBanner = useCallback(() => {
    setIsBannerOpen(false);
  }, []);

  // consentGiven is true ONLY if user explicitly accepted
  const consentGiven = consentStatus === 'accepted';

  return (
    <ConsentContext.Provider
      value={{
        consentGiven,
        consentStatus,
        isBannerOpen,
        openBanner,
        closeBanner,
        acceptConsent,
        rejectConsent,
        resetConsent,
        isLoaded,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
}
