

CREATE TABLE `categorie` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `categorie`
--

INSERT INTO `categorie` (`id`, `name`) VALUES
(1, 'Túrázás'),
(2, 'Síelés'),
(3, 'Tenger'),
(4, 'Kert'),
(5, 'Film'),
(6, 'Könyv');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `categ_id` int(11) NOT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `image` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `body` text COLLATE utf8_hungarian_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `title`, `categ_id`, `views`, `image`, `body`, `created_at`, `updated_at`) VALUES
(1, 35, 'Mont Blanc', 1, 0, '35-montblanc.jpg', 'A hegy a francia Haute-Savoie és az olasz Valle d’Aosta régiók között fekszik. A csúcs hovatartozása vitatott, mindkét országban sokak szerint a saját területükön van. A Franciaország és a Szárd–Piemonti Királyság közti 1861-ben megkötött szerződés szerint a határ a Mont Blanc legmagasabb pontján van (monte sur le groupe du Mont Blanc, en touche le point le plus élevé) és azóta nem született újabb definíció, de a francia térképek gyakran mégsem ennek alapján jelölik a határt.', '2022-02-26 20:08:28', NULL),
(2, 35, 'Chamonix', 1, 0, '35-chamonix.jpg', 'A két legismertebb város a Mont Blanc közelében a francia Chamonix (az első téli olimpia színhelye, 1924-ben), illetve az olasz oldalon az Aosta völgyben Courmayeur. A két várost köti össze az 1957–65 között épített, 11,6 kilométer hosszú Mont Blanc-alagút, amely az egyik legfontosabb az Alpokat átszelő útvonalon.', '2022-02-26 20:10:35', NULL),
(3, 35, 'Aiguille du Midi', 1, 0, '35-midi.jpg', 'Az első túránk a Francia Alpok fővárosából, a Mont Blanc lábánál fekvő Chamonix-ból indul. Hogy egészen közelről láthassuk Európa legmagasabb hegycsúcsát, rögtön felvonóra szállunk és pár perc alatt a 3842 m magas hegycsúcs, az Aiguille du Midi köré épített kilátóban találjuk magunkat. Tiszta időben egészen fantasztikus látvány tárul a szemünk elé. A Mont Blanc légvonalban csupán 8 kilométerre emelkedik előttünk, de ez csak egy a rengeteg látványos csúcsból. Amerre nézünk mindenhol havas csúcsokat és gleccsereket láthatunk. Miután az összes lehetséges kilátópontból megcsodáltuk a hegyeket, a felvonóval visszaereszkedünk a 2317 m magas Plan de l’Aiguille állomáshoz.', '2022-02-26 20:16:49', NULL),
(4, 35, 'Zuljana', 3, 0, '35-zuljana.jpg', 'Dubrovnik városától légvonalban 58, közúton 80 km-re, községközpontjától légvonalban 20, közúton 25 km-re északnyugatra, a Pelješac-félsziget középső részén, a déli parton, a nyugatra néző Žuljana-öbölben fekszik.', '2022-02-27 20:00:42', NULL),
(34, 48, 'Les 2 Alpes', 2, 0, '48-hegy.jpg', 'Les Deux Alpes, gyakran: Les 2 Alpes egy nagy kiterjedésű és népszerű síközpont Franciaországban, Isère megye keleti részén, 1650 méter tengerszint feletti magasságban 71 km-re délkelete Grenobletől.', '2022-03-18 22:26:14', '2022-03-21 15:38:56'),
(39, 48, 'Dia', 6, 0, '48-diafilm.jpg', 'Régen a diafilmek...', '2022-03-28 16:33:50', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('user','Admin') DEFAULT 'user',
  `password` varchar(255) NOT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `status` varchar(15) NOT NULL DEFAULT 'pending',
  `confirmationCode` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `role`, `password`, `created_at`, `updated_at`, `avatar`, `status`, `confirmationCode`) VALUES
(35, 'km', 'katay.magdi@gmail.com', 'Admin', '$2a$10$8Uid1ur9Isye21nMx9gLM.qAu07gp6.Ek26MG37m.hxnpuVzW19f2', '2022-03-11', NULL, NULL, 'pending', 'Os8ccnAQaswedfrtzb456zh'),
(48, 'kam', 'kmagdi@kkando.hu', 'user', '$2a$10$dC9MMrYpbrSLe6c43nyt3ezySA2YT29YoEL1fm7iP05/F6xBZCDMG', '2022-03-13', NULL, NULL, 'active', 'P5FB1I9xB22SQc54aNChK6QiI'),
(62, 'kmagdi', 'szakacslm@gmail.com', 'user', '$2a$10$6TnnzrIiXH9m67lbNyz/ReGU2f12lDpYKgnd2/2pNdMq9YmE5vSCO', '2022-03-30', NULL, NULL, 'active', 'xZWWuKPwXihjhbotkPlN3kvmG');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`,`categ_id`),
  ADD KEY `categ_id` (`categ_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `confirmationCode` (`confirmationCode`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`categ_id`) REFERENCES `categorie` (`id`),
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
