-- USERS: authentication/account info
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- PROFILES: tennis-specific info
CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  skill_level SMALLINT,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  search_radius_km INTEGER DEFAULT 30,
  elo_rating INTEGER DEFAULT 1200,
  bio TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
CREATE INDEX idx_profiles_lat ON profiles(lat);
CREATE INDEX idx_profiles_lng ON profiles(lng);

-- MATCHES: match requests
CREATE TABLE matches (
  id SERIAL PRIMARY KEY,
  requester_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  invitee_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  location_text TEXT,
  location_lat DOUBLE PRECISION,
  location_lng DOUBLE PRECISION,
  scheduled_time TIMESTAMP WITH TIME ZONE,
  bet_amount NUMERIC(6,2) CHECK (bet_amount >= 0 AND bet_amount <= 50),
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- MESSAGES: optional chat/messages
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  match_id INTEGER REFERENCES matches(id) ON DELETE CASCADE,
  sender_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- MATCH_SCORES: final match results
CREATE TABLE match_scores (
  id SERIAL PRIMARY KEY,
  match_id INTEGER UNIQUE REFERENCES matches(id) ON DELETE CASCADE,
  winner_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  loser_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  score_text VARCHAR(100),
  reported_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
