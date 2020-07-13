module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  port: 5433,
  username: 'postgres',
  password: 'docker',
  database: 'gonbo',
  define: {
    // vai ter colunas para created at and update at
    timestamps: 'true',
    // garante que a padronização será com o underscored e não CamelCase.
    // assim se tivermos um model UserGroup vai criar user_groups e não UserGroups
    underscored: 'true',
    underscoredAll: 'true',
  },
};
