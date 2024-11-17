
import pandas as pd
import sqlite3

#df_origin = pd.read_csv('IAU_ORIGIN.csv',skipinitialspace=True)
#df_append = pd.read_csv('IAU_APPENDIX.csv',skipinitialspace=True)
df_result = pd.read_csv('hip_result.csv', skipinitialspace=True)
df_code = pd.read_csv('hip_code.csv', skipinitialspace=True)
df_cons = pd.read_csv('IAU_CONS.csv',skipinitialspace=True)

# SQLiteのテーブルを作成し、CSVデータをインポートする
def main():
    conn = sqlite3.connect('stars.db')
    df_result.to_sql('STARS', conn, if_exists='replace', index=False)
    df_code.to_sql('CODES', conn, if_exists='replace', index=False)
    #df_origin.to_sql('ORIGIN', conn, if_exists='replace', index=False)
    #df_append.to_sql('APPENDIX', conn, if_exists='replace', index=False)
    df_cons.to_sql('CONS', conn, if_exists='replace', index=False)
    conn.close()


#　エントリポイント
if __name__ == '__main__':
    main()