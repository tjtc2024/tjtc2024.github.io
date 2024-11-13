
import pandas as pd
import sqlite3

df_origin = pd.read_csv('IAU_ORIGIN.csv',skipinitialspace=True)
df_append = pd.read_csv('IAU_APPENDIX.csv',skipinitialspace=True)
df_cons = pd.read_csv('IAU_CONS.csv',skipinitialspace=True)

# SQLiteのテーブルを作成し、CSVデータをインポートする
def main():
    conn = sqlite3.connect('stars.db')
    df_origin.to_sql('ORIGIN', conn, if_exists='replace', index=False)
    df_append.to_sql('APPENDIX', conn, if_exists='replace', index=False)
    df_cons.to_sql('CONS', conn, if_exists='replace', index=False)
    conn.close()


#　エントリポイント
if __name__ == '__main__':
    main()